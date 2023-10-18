const mongoose= require("mongoose");


//Modelo para collection PersonTransformation
const personTransformationSchema= mongoose.Schema({
namePerson:{
    type: String, required: true
},
imageBefore:{
    type: String, required: true
},
imageAfter:{
    type: String, required: true
}
});

const PersonTransformationModel= mongoose.model('PersonTransformation',personTransformationSchema);

module.exports= PersonTransformationModel;