const mongoose = require('mongoose')

var explicadorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email : {type :String , required : true},
  password: { type: String, required: true },
  phone: {type:String,required:false}
});
  
module.exports = mongoose.model('explicadores',  explicadorSchema);