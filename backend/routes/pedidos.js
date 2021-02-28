var express = require('express');
var router = express.Router();

var passport = require('passport')
var bcrypt = require('bcryptjs')

var Pedidos = require('../controllers/pedidos');
var Explicador = require('../controllers/explicadores');
const { session } = require('passport');

let promise = Promise.resolve();

/* NOVO PEDIDO */
router.post("/", passport.authenticate('jwt',{session:false}), function(req,res) {
    console.log(req.user)
    
    if(req.user.tipo != "Aluno"){
        return res.status(401).jsonp("Esta operação é só para alunos.")
    }
    else{
        req.body.idAluno = req.user.userId
        req.body.idExplicador = null
        req.body.estado = "Pendente"
        //console.log(req.body)

        Pedidos.insert(req.body)
            .then(data => {
                console.log(data)
                res.send(data.id)
            })
            .catch(e => res.status(500).send("Erro a criar pedido"))
    }
})

/*
Body : { idPedido : }
*/

router.post("/atribuirPedido",passport.authenticate('jwt',{session:false}),function(req,res){
    if(req.user.tipo != "Aluno"){
        return res.status(404).jsonp("Esta operação é só para alunos.")
    }
    else{
        Pedidos.findById(req.body.idPedido)
            .then(pedido => {
                console.log(pedido)
                if(pedido) {
                    if(pedido.estado == "Pendente") {
                        Pedidos.changeEstado(req.body.idPedido,req.body.idExplicador)
                            .then(data => res.jsonp("Pedido Aceite"))
                            .catch(e => res.status(500).jsonp(data))
                    }
                    else {
                        return res.status(400).jsonp("Este pedido já foi aceite!")
                    }
                }
                else {
                    return res.status(400).jsonp("Pedido não existe!")
                }
            })
            .catch(e => res.status(500).jsonp(data))
    }

})

/* TODOS OS PEDIDOS */
router.get('/', passport.authenticate('jwt',{session:false}), function(req,res) {
    if(req.user.tipo != "Explicador"){
        return res.status(404).jsonp("Esta operação é só para explicadores.")
    }
    else{
        Pedidos.getAll()
            .then(data => res.jsonp(data))
            .catch(e => res.status(500).jsonp(data))
    }
})

/* TODOS OS PEDIDOS PENDENTES */
router.get('/pendentes', passport.authenticate('jwt',{session:false}), function(req,res) {
    if(req.user.tipo != "Explicador"){
        return res.status(404).jsonp("Esta operação é só para explicadores.")
    }
    else{
        Pedidos.getPendentes()
            .then(data => res.jsonp(data))
            .catch(e => res.status(500).jsonp(data))
    }
})


/* PEDIDOS ELEGIVEIS A UM EXPLICADOR */
router.get('/elegiveis', passport.authenticate('jwt',{session: false}), async function(req,res) {
    if(req.user.tipo != "Explicador"){
        return res.status(404).jsonp("Esta operação é só para explicadores.")
    }
    else{
        elegiveis = []
        const pedidos = await Pedidos.getPendentes()

        const promises = pedidos.map(async pedido => {
            const t = await Explicador.verificaPar(req.user.userId,pedido.area,pedido.ano)
            if ( t.length> 0)
            elegiveis.push(pedido)
            return t
          })

        const ts = await Promise.all(promises)
        console.log(ts)
        res.jsonp(elegiveis)
             
    }



})



/* explicadores ELEGIVEIS PARA UM PEDIDO*/

router.get('/explicadores-elegiveis', passport.authenticate('jwt',{session: false}), function(req,res) {
    Pedidos.findById(req.query.idPedido)
            .then(pedido => {
                console.log(pedido)
                if(pedido) {
                    Explicador.findByPair(pedido.area, pedido.ano)
                        .then(data =>{ 
                            console.log(data)    
                            res.jsonp(data)
                        })
                        .catch(e => res.status(500).jsonp(e))
                }
                else {
                    return res.status(400).jsonp("Pedido não existe!")
                }
            })
            .catch(e => res.status(500).jsonp(data))
})


module.exports = router ;