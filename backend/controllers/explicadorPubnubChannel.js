var ExplicadorPubNubChannel = require('../models/explicadorPubnubChannel');


module.exports.findBychannel = idExplicador =>{
    return ExplicadorPubNubChannel
        .find({idExplicador : idExplicador})
        .exec()
}

module.exports.updateConnection =(idExplicador,channel) => {
    return ExplicadorPubNubChannel
    .updateOne({idExplicador: idExplicador},
        {$set : { channel : channel}})
    .exec()    
}


module.exports.createConnection = (info) => {
    var novo = new ExplicadorPubNubChannel(info)
    return novo.save()
}


