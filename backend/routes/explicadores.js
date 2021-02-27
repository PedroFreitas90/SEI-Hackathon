var express = require('express');
var router = express.Router();

var passport = require('passport')
var bcrypt = require('bcryptjs')

var GenerateToken = require('../security/generateToken')

var Explicador = require('../controllers/explicadores');

router.get('/', passport.authenticate('jwt',{session:false}), function(req,res) {
    
    Explicador.findById(req.user.userId)
        .then(d => res.jsonp(d))
        .catch(e => res.status(500).send(e))
})

// Adicionar PAR
router.post('/adicionarPar', passport.authenticate('jwt',{session:false}), function(req,res) {
    if(req.user.tipo != 'Explicador')
        return res.status(401).jsonp('Esta rota é apenas para professores!');
    else {
        console.log(req.body)    
    Explicador.verificaPar(req.user.userId ,req.body.area, req.body.ano)
        .then(verificaPar => {
            console.log(verificaPar)
            if (verificaPar.length ==0) {
                let par = {area: req.body.area , ano: req.body.ano}
                Explicador.adicionarPar(req.user.userId , par)
                    .then(ad_par => {
                        if(ad_par.nModified > 0 ){
                            res.jsonp("Par adicionado!")
                        }
                        else{
                            return res.status(400).jsonp("Par não adicionado!")
                        }
                    })
                    .catch(e => res.status(500).jsonp("Erro a adicionar o par"))

            }
            else {
                res.status(400).jsonp("Ja existe")
            }

        })
        .catch(error =>{
            res.status(500).jsonp(error)
        })
    }
})

module.exports = router;