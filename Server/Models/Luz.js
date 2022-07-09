const {Schema, model} = require('mongoose');

const newSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
    },
    usuario:{
        type: Schema.Types.ObjectId
    }
})

const modelo = new model('Luz', newSchema);
module.exports = modelo;