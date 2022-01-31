const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    titulo: {type: String},
    precio: {type: Number},
    descripcion: {type: String}
}, {timestamps: true})

module.exports.Person = mongoose.model("Person", PersonSchema);