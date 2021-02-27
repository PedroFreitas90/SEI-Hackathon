var express = require('express');
var router = express.Router();

var passport = require('passport')
var bcrypt = require('bcryptjs')

var Pedidos = require('../controllers/pedidos');
var Explicador = require('../controllers/explicadores');

/* NOVO PEDIDO */
router.post("/", passport.authenticate('jwt',{session:false}), function(req,res) {
    if(req.user.tipo != "Aluno"){
        return res.status(404).jsonp("Esta operação é só para alunos.")
    }
    else{
        req.body.idAluno = req.user.userId
        req.body.idExplicador = null
        req.body.estado = "Pendente"
        //console.log(req.body)

        Pedidos.insert(req.body)
            .then(data => res.jsonp("Pedido adicionado com sucesso"))
            .catch(e => res.status(500).send("Erro a criar pedido"))
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
        console.log(req.user.userId)
        Explicador.findById(req.user.userId)
            .then(explicador => {
                if(explicador) {
                    let pedidos = []
                                      

                    res.jsonp(pedidos)
                    
                    
                    
                    /*explicador.domains.forEach(elem => {
                        Pedidos.pedidosPendentesPorPar(elem.area, elem.ano)
                            .then(pds =>{
                                pds.forEach(el => {
                                    pedidos.push(el)
                                })
                                console.log('PEDIDOS: ',pedidos)                      
                            })
                            .catch()
                    })
                    */
                    
                }

                else{
                    return res.status(400).jsonp("Este explicador não existe.")
                }
            })
            .catch(e => res.status(500).jsonp(e))
    }
})

module.exports = router;