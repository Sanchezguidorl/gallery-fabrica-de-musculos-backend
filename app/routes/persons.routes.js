const express= require('express');
const { createPerson, getPersons, getPersonById, deletePersonById, updatePersonById } = require('../controllers/persons.controller');
const router= express.Router();


router.post("/persons/create",createPerson);

router.get("/persons",getPersons);

router.get("/persons/:id",getPersonById);

router.delete("/persons/delete/:id",deletePersonById);

router.put("/persons/update",updatePersonById);

module.exports= router;