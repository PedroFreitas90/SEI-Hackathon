const mongoose = require('mongoose')

var pairSchema = new mongoose.Schema({
  area: { type : String, required : true } ,
  ano : { type: String, required : true },

}, {_id: 0});


var explicadorSchema = new mongoose.Schema({
  name: { type : String, required: true },
  email : {type : String , required : true},
  password: { type : String, required : true },
  phone: { type : String, required : false },
  about: {type:String, required: false, default: ""},
  domains: [ { type : pairSchema } ]
});
  
module.exports = mongoose.model('explicadores',  explicadorSchema);