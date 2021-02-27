var express = require('express');
var router = express.Router();

var passport = require('passport')
var bcrypt = require('bcryptjs')

var Pedidos = require('../controllers/pedidos');

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


module.exports = router;