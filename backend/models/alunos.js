const mongoose = require('mongoose')

var alunoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email : {type :String , required : true},
  password: { type: String, required: true },
  phone: {type:String,required:false},
  about: {type:String, required: false, default: ""}
});
  
module.exports = mongoose.model('alunos',  alunoSchema);