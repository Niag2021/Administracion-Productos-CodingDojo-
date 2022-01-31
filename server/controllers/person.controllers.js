const { Person } = require('../models/person.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createPerson = (request, response) => {
    const { titulo, precio, descripcion } = request.body;
    Person.create({
        titulo,
        precio,
        descripcion
    })
        .then(person=>response.json(person))
        .catch(err=>response.json(err))
}