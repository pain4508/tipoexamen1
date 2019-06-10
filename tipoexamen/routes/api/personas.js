
var express = require("express");
var router = express.Router();
//Esto es nuevo para generar un identificador unico
var uuid = require('uuid/v4');

var personaCollection = [];
var personaStruct = {

    id:0,
    nombre: '',
    correo: '',
    telefono: '',
    nota: ''
}

personaCollection.push(
    Object.assign(
        {},
        personaStruct,
        {
            id:uuid(),
            nombre: 'Cristian Prado',
            correo: 'kmsprado2546@gmail.com',
            telefono: '99000000',
            nota: 'Ejemplo de Persona ejercicio tipo examen'
        }
    )

);

router.get('/', (req, res, next)=>{
    //Obtiene la coleccion de personas
 res.status(200).json(personaCollection);
});//get

router.get('/:id', (req, res, next)=>{
    res.status(200).json({msg:"Not Imprement"});
    }); //get one by Id

router.post('/',(req, res, next)=>{
    var newPersona = Object.assign(
        {},
        personaStruct,
        {id:uuid()},
        req.body
    );
    personaCollection.push(newPersona);
    res.status(200).json(newPersona);

});//post.

router.put('/:id', (req, res, next)=>{
    res.status(403).json({msg:"Not Imprement"});
}); //put.

router.delete('/:id',(req, res, next)=>{
    res.status(403).json({msg:"Not Imprement"});
});//delete

module.exports = router;
