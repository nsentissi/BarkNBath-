import React, { useState } from "react";
import Modal from "react-modal";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../hooks/AuthContext";
import axiosClient from "../../../axiosClient";
import TimePicker from "react-time-picker";
import Modalmap from "./Modalmap";
import TrashApp from "../../assets/trashapp.svg";
import ServicesDog from "../ServicesDog";
import map from "../../assets/map.png"


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
      const response = await axiosClient.post(
        "/appointment/create",
        data,
      );
      
      toast("Appointment booked!");
      navigate("/dashboard/pets")
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
      <div className="bg-accent/90 z-1 p-8 sm:p-8 rounded-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl max-w-2xl w-5/6">
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

          <div className="flex flex-col">
          <div>
          <button  onClick={openModal} className="mb-2 text-smm border-4 py-2 px-2 rounded-full border-success bg-primary/60">View Services</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Services Modal"
          >
            <ServicesDog />
            <button onClick={closeModal}>
              <img src={TrashApp} className="w-8" />
            </button>
          </Modal>
        </div>
            <label htmlFor="service" className="mb-2 font-semibold ">
              Service:
            </label>
            <select
              {...register("service", { required: true })}
              className="border p-2 rounded"
            >
              <option value="">Select a Service</option>
              <option value="Basic grooming package">
                The Works
              </option>
              <option value="Luxury spa retreat">Ultimate Paw Care</option>
              <option value="Full grooming makeover">
               Breed Standard
              </option>
              <option value="Full grooming makeover">
               Premium Bath
              </option>
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
            <input
              {...register("address", { required: true })}
              type="text"
              className="border p-2 rounded"
              placeholder="Pick a location"
            />

            {errors.address && (
              <span className="text-red-500 text-sm">Address is required</span>
            )}
            <div>
              <button
                onClick={handleOpenMapListModal}
                type="button"
                className="bg-gray-200 mt-4 mx-auto w-1/4 text-black p-2 rounded-r hover:bg-gray-300"
              >
                <img className="w-1/2" src={map}/>
              </button>
              <Modalmap isOpen={isMapModalOpen} onClose={handleCloseMapModal}>
                <NewMap onMarkerClick={handleAddressSelect} />
              </Modalmap>
            </div>
          </div>

          <button
            type="submit"
            className="lg:ml-36 bg-success hover:bg-primary text-white font-bold p-2 rounded w-2/4 sm:w-2/4 mb-4 sm:mb-0"
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
