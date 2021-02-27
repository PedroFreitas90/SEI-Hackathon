var Aluno = require('../models/alunos');

module.exports.getAll = () => {
    return Aluno
        .find()
        .exec()
}
module.exports.findById = id =>{
    return Aluno
        .findById(id)
        .exec()
}


module.exports.findByEmail = (email) => {
    return Aluno
            .find({email: {  $regex: new RegExp("^" + email.toLowerCase(), "i") }})
            .exec()
}

module.exports.updatePassword = (id,password) => {
    return Aluno
    .updateOne({_id :id },
        {$set : {
            password : password
        }})
}

module.exports.update = (id,consumer) => {
    return Aluno
            .updateOne({_id : id},
                {$set : {
                    name : consumer.name,
                    email : consumer.email,
                    phone : consumer.phone
                }
            })

}

module.exports.insert = u => {
    var novo = new Aluno(u)
    return novo.save()
   
}