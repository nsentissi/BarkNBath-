
import React, {useState} from 'react'

import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../../hooks/AuthContext";
import axios from "axios";
import Modal from './Modal';
import ServicesTable from "../ServicesTable"

const AppointmentForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [appointments, setAppointments] = useState([]);
  const { currentUser } = useAuth();
  const [isServiceListModalOpen, setServiceListModalOpen] = useState(false);
  const handleOpenServiceListModal = () => setServiceListModalOpen(true);
  const handleCloseServiceListModal = () => setServiceListModalOpen(false);


  if (!currentUser) {
    return <div>Please log in.</div>;
  }

  const onSubmit = async (data) => {
    try {
      console.log(data)
      const response = await axios.post(
        "http://localhost:3000/appointment/create",
        data,
        { withCredentials: true }
        
      );
      toast("Appointment booked!");
      console.log(response.data);
      reset();
    } catch (error) {
      console.error("Error submitting form", error.response.data);
    }
  };

  const getDisabledDate = (time) => {
    const exists = appointments.find((a) => a.time === time);
    return !!exists;
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto mt-10 space-y-4"
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
                const response = await axios.get(
                  `http://localhost:3000/appointment?date=${date}`,
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
        <label  className="mb-2 font-semibold">
            pet:
          </label>
          <select {...register("pet")}  type="text" className="flex flex-col border p-2 rounded">
          <option >Select a pet</option>
            {currentUser.pets.map((pet, index) => (
              <option value={pet._id} key={index}> {pet.name}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="time" className="mb-2 font semibild">
            time:
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
          <label htmlFor="service" className="mb-2 font-semibold">
            Service:
          </label>
          <select
            {...register("service", { required: true })}
            className="border p-2 rounded"
          >
            <option value="">Select a Service</option>
            <option value="Basic grooming package">
              Basic Grooming Package
            </option>
            <option value="Luxury spa retreat">Luxury Spa Retreat</option>
            <option value="Full grooming makeover">
              Full Grooming Makeover
            </option>
            <option value="Wellness and relaxation package">
              Wellness and Relaxation Package
            </option>
          </select>
          {errors.service && (
            <span className="text-red-500 text-sm">Service is required</span>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="address" className="mb-2 font-semibold">
            Address:
          </label>
          <input
            {...register("address", { required: true })}
            type="text"
            className="border p-2 rounded"
          />
          {errors.address && (
            <span className="text-red-500 text-sm">Address is required</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors"
        >
          Book Appointment
        </button>
      </form>
      <ToastContainer />
      <div>
      <button onClick={handleOpenServiceListModal}>View Services</button>
      <Modal isOpen={isServiceListModalOpen} onClose={handleCloseServiceListModal}>
        <ServicesTable/>
        </Modal>
      </div>
    </div>
  );
};

export default AppointmentForm;
