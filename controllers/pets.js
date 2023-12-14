const Pet = require('../models/pet'); 
const ErrorResponse = require('../utils/ErrorResponse');

//  creating a new pet

const createPet = async (req, res, next) => {
  try {
    const { name, breed, age, weight, Bio } = req.body;

    const newPet = await Pet.create({ name, breed, age, weight, Bio });
    
    res.status(201).json(newPet);
  } catch (error) {
    next(error);
  }
};

// pet details

const getPetDetails = async (req, res, next) => {
  try {
    const petId = req.params.petId;
    const pet = await Pet.findById(petId);

    if (!pet) {
      throw new ErrorResponse('Pet not found', 404);
    }

    res.status(200).json(pet);
  } catch (error) {
    next(error);
  }
};


// updating pet information

const updatePet = async (req, res, next) => {
  try {
    const petId = req.params.petId;
    const { name, breed, age, weight, Bio } = req.body;

    const updatedPet = await Pet.findByIdAndUpdate(
      petId,
      { name, breed, age, weight, Bio },
      { new: true, runValidators: true }
    );

    if (!updatedPet) {
      throw new ErrorResponse('Pet not found', 404);
    }

    res.status(200).json(updatedPet);
  } catch (error) {
    next(error);
  }
};

// deleting a pet

const deletePet = async (req, res, next) => {
  try {
    const petId = req.params.petId;

    const deletedPet = await Pet.findByIdAndDelete(petId);

    if (!deletedPet) {
      throw new ErrorResponse('Pet not found', 404);
    }

    res.status(200).json({ message: 'Pet deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPet,
  getPetDetails,
  updatePet,
  deletePet,
};
