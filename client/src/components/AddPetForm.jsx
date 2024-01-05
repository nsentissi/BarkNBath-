import React, { useState } from 'react';

const AddPetForm = ({ onPetAdded }) => {
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

  const handleAddPet = async () => {
    try {
      const response = await fetch('http://localhost:3000/pets/add-pet',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(petData)
      });

      if (!response.ok) {
        throw new Error('Failed to create pet');
      }

      const newPet = await response.json();
      onPetAdded(newPet); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddPet();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={petData.name} onChange={handleChange} placeholder="Pet's Name" required />
      <input type="text" name="breed" value={petData.breed} onChange={handleChange} placeholder="Breed" required />
      <input type="number" name="age" value={petData.age} onChange={handleChange} placeholder="Age" required />
      <input type="number" name="weight" value={petData.weight} onChange={handleChange} placeholder="Weight" required />
      <textarea name="Bio" value={petData.Bio} onChange={handleChange} placeholder="Bio" required />
      <button type="submit">Add Pet</button>
    </form>
  );
};

export default AddPetForm;
