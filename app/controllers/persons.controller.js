const PersonTransformationModel = require("../models/PersonTransformation.model");

const createPerson= async(req, res)=>{
const {name, imageBefore, imageAfter}=req.body;
try {
    const newPerson= new PersonTransformationModel({
namePerson: name, imageBefore: imageBefore, imageAfter: imageAfter
    });

    const personSaved= await newPerson.save();
    return res.json({success: true, data: personSaved})
} catch (error) {
    return new Error(error);
}
};

const getPersons= async(req, res)=>{
try {
    const persons= await PersonTransformationModel.find();
    return res.json({success: true, data: persons})
} catch (error) {
    return new Error(error);
}
};

const getPersonById= async(req, res)=>{
    const id= req.params.id;
    try {
        const personById= await PersonTransformationModel.find({_id:id});
        return res.json({success: true, data: personById})
    } catch (error) {
        console.log(error)
        return new Error(error);
    }
    };

const deletePersonById= async(req, res)=>{
    const id= req.params.id;
    try {
        const deletedPerson= await PersonTransformationModel.findByIdAndDelete(id)
        return res.json({success: true, data: deletedPerson});
    } catch (error) {
        console.log(error)
        return new Error(error);
    }
    };

const updatePersonById= async(req, res)=>{
    const {name, imageBefore, imageAfter, id}=req.body;
const inputsEmpty= [name, imageAfter, imageBefore].filter(e=>e==='');

    if(inputsEmpty){
return new Error("Todos los campos son obligatorios");
    }

    try {
        const newPerson= {
    namePerson: name, imageBefore: imageBefore, imageAfter: imageAfter
        };
    
        const updatedPerson= await PersonTransformationModel.findByIdAndUpdate({_id: id},newPerson, {new: true});
        return res.json({success: true, data: updatedPerson});
    } catch (error) {
        console.log(error)
        return new Error(error);
    }
    };

module.exports={createPerson, getPersons, getPersonById, deletePersonById, updatePersonById};