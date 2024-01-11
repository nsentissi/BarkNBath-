import React, { useState,useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { PetContext } from '../../hooks/PetContext';
import { useNavigate } from 'react-router-dom';

const AddPetForm = () => {
  const { setPetName } = useContext(PetContext);
  const navigate = useNavigate();
    const [error, setError] = useState('');
  const [petData, setPetData] = useState({
    name: '',
    breed: '',
    age: '',
    weight: '',
    Bio: ''
  });

  const [image, setImage] = useState(null);
  

  const handleChange = (e) => {
    if (e.target.name === 'profilePhoto') {
      setImage(e.target.files[0]);
    } else {
      setPetData({ ...petData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in petData) {
      formData.append(key, petData[key]);
    }
    if (image) {
      formData.append('profilePhoto', image);
    }

    try {
      const response = await axios.post('http://localhost:3000/pet/create', formData, {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response && response.data) {
        setPetName(petData.name);
        toast("Pet created!");
        navigate("/");
      } else {
        console.error("Response data is undefined.");
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
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

<input
        type="file"
        name="profilePhoto"
        onChange={handleChange}
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