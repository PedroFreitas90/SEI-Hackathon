var Explicador = require('../models/explicadores');

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

module.exports.update = (id,explicador) => {
    return Explicador
            .updateOne({_id : id},
                {$set : {
                    name : explicador.name,
                    email : explicador.email,
                    phone : explicador.phone
                }
            })

}

module.exports.adicionarPar = (id, pair) => {
    console.log(pair)
    return Explicador
        .updateOne({_id: id}, {$push : { domains: pair  }} ).exec()
}

module.exports.verificaPar = (id,area,ano) => {
    return Explicador.find({_id:id,
    domains:{ $elemMatch : {area:area, ano:ano}}}
    ).exec()
}

module.exports.insert = u => {
    var novo = new Explicador(u)
    return novo.save()
   
}