import React, { useState } from "react";
import Modal from "react-modal";
import "./Appointment.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../hooks/AuthContext";
import axiosClient from "../../../axiosClient";
import TimePicker from "react-time-picker";
import Modalmap from "./Modalmap";
import TrashApp from "../../assets/trashapp.svg";
import ServicesDog from "../ServicesDog";
import map from "../../assets/map.png";

import NewMap from "../MapContainer";

const AppointmentForm = ({ setActiveContent }) => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const [appointments, setAppointments] = useState([]);
  const { currentUser } = useAuth();
  const [isServiceListModalOpen, setServiceListModalOpen] = useState(false);
  const handleOpenServiceListModal = () => setServiceListModalOpen(true);
  const handleCloseServiceListModal = () => setServiceListModalOpen(false);
  const [isMapModalOpen, setMapModalOpen] = useState(false);
  const handleOpenMapListModal = () => setMapModalOpen(true);
  const handleCloseMapModal = () => setMapModalOpen(false);

  if (!currentUser) {
    return <div>Please log in.</div>;
  }

  const handleAddressSelect = (address) => {
    setValue("address", address);
    handleCloseMapModal();
  };

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await axiosClient.post("/appointment/create", data);

      toast("Appointment booked!");
      navigate("/dashboard/pets");
      console.log(response.data);

      reset();
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  const getDisabledDate = (time) => {
    const exists = appointments.find((a) => a.time === time);
    return !!exists;
  };

  return (
    <div class=" max-h-screen mt-6 z-0 flex items-center justify-center  px-4">
      <div className="bg-transparent z-1 p-8 sm:p-8 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl max-w-2xl w-5/6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-xl mx-auto mt-4 space-y-4"
        >
          <div className="flex flex-col">
            <label htmlFor="date" className="mb-2 font-semibold">
              Date:
            </label>
            <input
              {...register("date", {
                required: true,
                onChange: async (e) => {
                  const date = new Date(e.target.value).toISOString();
                  const response = await axiosClient.get(
                    `/appointment?date=${date}`,
                    { withCredentials: true }
                  );
                  setAppointments(response.data);
                  console.log();
                },
              })}
              type="date"
              className="border p-2 rounded"
            />
            {errors.date && (
              <span className="text-red-500 text-sm">Date is required</span>
            )}
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Pet:</label>
            <select
              {...register("pet")}
              type="text"
              className="flex flex-col border p-2 rounded"
            >
              <option>Select a pet</option>
              {currentUser.pets.map((pet, index) => (
                <option value={pet._id} key={index}>
                  {" "}
                  {pet.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="time" className="mb-2 font-semibold">
              Time:
            </label>
            <select
              {...register("time", { required: true })}
              type="text"
              className="border p-2 rounded"
            >
              <option disabled={getDisabledDate("9:00")} value="9:00">
                9-10
              </option>
              <option disabled={getDisabledDate("10:00")} value="10:00">
                10-11
              </option>
              <option disabled={getDisabledDate("11:00")} value="11:00">
                11-12
              </option>
              <option disabled={getDisabledDate("14:00")} value="14:00">
                14-15
              </option>
              <option disabled={getDisabledDate("15:00")} value="15:00">
                15-16
              </option>
              <option disabled={getDisabledDate("16:00")} value="16:00">
                16-17
              </option>
              <option disabled={getDisabledDate("17:00")} value="17:00">
                17-18
              </option>
            </select>
          </div>

          {/* <div className="flex flex-col">
        <label htmlFor="time" className="mb-2 font-semibold">Time:</label>
        <input {...register("time", { required: true })} type="text" className="border p-2 rounded" placeholder="HH:MM"/>
        {errors.time && <span className="text-red-500 text-sm">Time is required</span>}
      </div> */}
          <div>
            <button onClick={openModal} className="cta flex ">
              <span>View Packages</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Services Modal"
            style={{
              overlay: {
                zIndex: 1000, 
              },
            }}
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto"
            className="relative w-full h-full flex justify-center items-start pt-10"
          >
            <div className="w-full  bg-black bg-opacity-50 overflow-y-auto rounded-none">
              <ServicesDog />
              <button onClick={closeModal} className="absolute top-5 right-5">
                <img src={TrashApp} className="w-8" />
              </button>
            </div>
          </Modal>
           
          </div>
          <div className="flex flex-col">
            <label htmlFor="service" className="mb-2 font-semibold ">
              Service:
            </label>
            <select
              {...register("service", { required: true })}
              className="border p-2 rounded"
            >
              <option value="">Select a Service</option>
              <option value="Basic grooming package">The Works</option>
              <option value="Luxury spa retreat">Ultimate Paw Care</option>
              <option value="Full grooming makeover">Breed Standard</option>
              <option value="Full grooming makeover">Premium Bath</option>
              <option value="Full grooming makeover">
                The Complete Grooming Experince
              </option>
              <option value="Wellness and relaxation package">
                Doggy Haircut
              </option>
            </select>
            {errors.service && (
              <span className="text-red-500 text-sm">Service is required</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="mb-2 font-semibold">
              Location
            </label>
            <div className="relative border p-2 rounded">
              <input
                {...register("address", { required: true })}
                type="text"
                className="w-full pl-10 pr-4 py-2"
                placeholder="Pick a location"
              />

              {/* Icon inside the input */}
              <button
                onClick={handleOpenMapListModal}
                type="button"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                <img className="w-8 h-8" src={map} />
              </button>
            </div>

            <div>
              {errors.address && (
                <span className="text-red-500 text-sm">
                  Address is required
                </span>
              )}
              <Modalmap isOpen={isMapModalOpen} onClose={handleCloseMapModal}>
                <NewMap onMarkerClick={handleAddressSelect} />
              </Modalmap>
            </div>
          </div>

          <button
            type="submit"
            className="lg:ml-36 bg-success hover:bg-primary  font-bold p-2 rounded w-2/4 sm:w-2/4 mb-4 sm:mb-0"
          >
            Book Appointment
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AppointmentForm;
