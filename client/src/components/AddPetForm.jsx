import React, { useState,useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { PetContext } from '../hooks/PetContext';

const AddPetForm = () => {
  const { setPetName } = useContext(PetContext);
    const [error, setError] = useState('');
  const [petData, setPetData] = useState({
    name: '',
    breed: '',
    age: '',
    weight: '',
    Bio: ''
  });

  

  const handleChange = (e) => {
    setPetData({ ...petData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/pet/create', petData, { withCredentials: true });
      
      if (response && response.data) {
        setPetName(petData.name);
        console.log(response.data);
        toast("Pet created!");
        
        
      } else {
        console.error("Response data is undefined.");
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
      console.error(err);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
  type="text"
  name="name"
  value={petData.name}
  onChange={handleChange}
  placeholder="Pet's Name"
  required
/>
<input
  type="text"
  name="breed"
  value={petData.breed}
  onChange={handleChange}
  placeholder="Breed"
  required
/>
<input
  type="number"
  name="age"
  value={petData.age}
  onChange={handleChange}
  placeholder="Age"
  required
/>
<input
  type="number"
  name="weight"
  value={petData.weight}
  onChange={handleChange}
  placeholder="Weight"
  required
/>
<textarea
  name="Bio"
  value={petData.Bio}
  onChange={handleChange}
  placeholder="Bio"
  required
/>

      <button type="submit">Add Pet</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default AddPetForm;