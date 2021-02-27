var Explicador = require('../models/alunos');

module.exports.getAll = () => {
    return Explicador
        .find()
        .exec()
}
module.exports.findById = id =>{
    return Explicador
        .findById(id)
        .exec()
}


module.exports.findByEmail = (email) => {
    return Explicador
            .find({email: {  $regex: new RegExp("^" + email.toLowerCase(), "i") }})
            .exec()
}

module.exports.updatePassword = (id,password) => {
    return Explicador
    .updateOne({_id :id },
        {$set : {
            password : password
        }})
}

module.exports.update = (id,consumer) => {
    return Explicador
            .updateOne({_id : id},
                {$set : {
                    name : consumer.name,
                    email : consumer.email,
                    phone : consumer.phone
                }
            })

}

module.exports.insert = u => {
    var novo = new Explicador(u)
    return novo.save()
   
}