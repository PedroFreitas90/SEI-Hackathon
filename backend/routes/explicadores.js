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
    var flag = 0;
    Explicador.verificaPar(req.user.userId ,req.body.area, req.body.ano)
        .then(verificaPar => {
            verificaPar.forEach(element => {
                if (element._id == req.user.userId && element.domains.area === req.body.area && element.domains.ano === req.body.ano){
                    flag = 1;
                }
            })
            if(flag == 1){
                return res.status(400).jsonp('Essa área de conhecimento já está associada a esse utilizador')
            }
            else{
                let par = { area: req.body.area, ano: req.body.ano }
                console.log(par)
                Explicador.adicionarPar(req.user.userId , par)
                    .then(ad_par => {
                        console.log(ad_par)
                        if(ad_par.nModified > 0 ){
                            res.jsonp("Par adicionado!")
                        }
                        else{
                            return res.status(400).jsonp("Par não adicionado!")
                        }
                    })
                    .catch(e => res.status(500).jsonp("Erro a adicionar o par"))
            }
        })
        .catch(error =>{
            res.status(500).jsonp(error)
        })
})
 

module.exports = router;