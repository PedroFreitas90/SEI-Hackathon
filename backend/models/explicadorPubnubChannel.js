const mongoose = require('mongoose')


var channelpubnubSchema = new mongoose.Schema({
    idExplicador : {type: String, required:true},
    channel: {type:String, required:true}
})
module.exports = mongoose.model('channelpubnub',  channelpubnubSchema);