const mongoose = require('mongoose')

var pedidoSchema = new mongoose.Schema({
    area: { type: String, required: true },
    ano : { type: String, required: true },
    mensagem : { type: String, required: true },
    idAluno: { type: String, required: true },
    idExplicador : { type: String, required: false },
    estado: { type : String, required: true}
});
  
module.exports = mongoose.model('pedidos',  pedidoSchema);