var Pedido = require('../models/pedidos');

module.exports.getAll = () => {
    return Pedido
        .find()
        .exec()
}
module.exports.findById = id =>{
    return Pedido
        .findById(id)
        .exec()
}


module.exports.pedidosPorPar = (area, ano) => {
    return Pedido
            .find({area: area, ano: ano})
            .exec()
}

module.exports.pedidosPendentesPorPar = (area, ano) => {
    return Pedido
            .find({area: area, ano: ano , estado: "Pendente"})
            .exec()
}

module.exports.changeEstado = (id, idExplicador) => {
    return Pedido
            .updateOne({_id : id},
                {$set : {
                    explicador_id : idExplicador,
                    estado: "Aceite"
                }
            })
}

module.exports.insert = u => {
    var novo = new Pedido(u)
    console.log(novo)
    return novo.save()
}