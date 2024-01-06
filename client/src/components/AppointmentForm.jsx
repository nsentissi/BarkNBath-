import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from '../hooks/AuthContext'
import axios from 'axios';

const AppointmentForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <div>Please log in.</div>;
  }


  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/appointment/create', data, { withCredentials: true });
      toast("Appointment booked!");
      console.log(response.data);
      reset(); 
    } catch (error) {
        console.error('Error submitting form', error.response.data);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10 space-y-4">
      <div className="flex flex-col">
        <label htmlFor="date" className="mb-2 font-semibold">Date:</label>
        <input {...register("date", { required: true })} type="date" className="border p-2 rounded" />
        {errors.date && <span className="text-red-500 text-sm">Date is required</span>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="time" className="mb-2 font-semibold">Time:</label>
        <input {...register("time", { required: true })} type="text" className="border p-2 rounded" placeholder="HH:MM"/>
        {errors.time && <span className="text-red-500 text-sm">Time is required</span>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="service" className="mb-2 font-semibold">Service:</label>
        <select {...register("service", { required: true })} className="border p-2 rounded">
          <option value="">Select a Service</option>
          <option value="Basic grooming package">Basic Grooming Package</option>
          <option value="Luxury spa retreat">Luxury Spa Retreat</option>
          <option value="Full grooming makeover">Full Grooming Makeover</option>
          <option value="Wellness and relaxation package">Wellness and Relaxation Package</option>
        </select>
        {errors.service && <span className="text-red-500 text-sm">Service is required</span>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="address" className="mb-2 font-semibold">Address:</label>
        <input {...register("address", { required: true })} type="text" className="border p-2 rounded"/>
        {errors.address && <span className="text-red-500 text-sm">Address is required</span>}
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors">
        Book Appointment
      </button>
    </form>
    <ToastContainer />
    </div>
  );
};

export default AppointmentForm;