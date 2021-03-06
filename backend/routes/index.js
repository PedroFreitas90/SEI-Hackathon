var express = require('express');
var router = express.Router();

var passport = require('passport')
var bcrypt = require('bcryptjs')

var GenerateToken = require('../security/generateToken')

var Alunos = require('../controllers/alunos');

var Explicador = require('../controllers/explicadores');
var Chat = require("../chat")


router.post('/login', function(req,res){ 
    console.log(req.body);

    Explicador.findByEmail(req.body.email)
        .then(explicador => {
            if(explicador.length == 1){ //É um explicador
                if (bcrypt.compareSync(req.body.password, explicador[0].password)){
                    Chat.create_token(explicador[0].name)
                    .then(tokenC => {

                    
                    var responseExplicador  = {}
                    responseExplicador.id = explicador[0].id
                    responseExplicador.name = explicador[0].name
                    responseExplicador.email = explicador[0].email
                    responseExplicador.phone = explicador[0].phone
                    responseExplicador.tipo = "Explicador"
                    responseExplicador.about = explicador[0].about
                    responseExplicador.token = GenerateToken.generateTokenBackend(explicador[0].id , "Explicador")
                    responseExplicador.tokenChat = tokenC
                    res.jsonp(responseExplicador);
                    })
                    .catch(e => res.status(400).send(e))
                }
                else {
                  res.status(400).jsonp("Password errada!");
                }
            }
            else{ //Não é explicador
                Alunos.findByEmail(req.body.email)
                    .then(aluno => {
                        if(aluno.length == 1) {// é aluno
                            if (bcrypt.compareSync(req.body.password, aluno[0].password)){
                                Chat.create_token(aluno[0].name)
                                .then(tokenC => {
                                var responseAluno  = {}
                                responseAluno.id = aluno[0].id
                                responseAluno.name = aluno[0].name
                                responseAluno.email = aluno[0].email
                                responseAluno.phone = aluno[0].phone
                                responseAluno.about = aluno[0].about
                                responseAluno.tipo = "Aluno"
                                responseAluno.token = GenerateToken.generateTokenBackend(aluno[0].id , "Aluno")
                                responseAluno.tokenChat = tokenC    
                                res.jsonp(responseAluno);
                            })
                            .catch(e => res.status(400).send(e))
                            }
                            else {
                              res.status(400).jsonp("Password errada!");
                            }
                        }
                        else{ // Não é nada
                            res.status(400).jsonp("O email não está registado na aplicação!")
                        }
                    })
                    .catch(e => res.status(500).jsonp(e))
            }
        })
        .catch(error => {
            res.status(500).jsonp(error);
        })
});



router.post('/', function(req,res) {
    var newHash = bcrypt.hashSync(req.body.password);
    req.body.password = newHash
    
    if(req.body.tipo == "Explicador"){
        Explicador.findByEmail(req.body.email)
            .then(user =>{
                if(user.length > 0){
                    res.status(400).jsonp("Este email já está registado") 
                }
                else {
                    req.body.domains = [];
                    Explicador.insert(req.body)
                        .then(newUser => res.jsonp(newUser))
                        .catch(e => res.status(500).jsonp(e))
                }
      
            })
            .catch(e => res.status(500).jsonp(e))
    }

    else{
        Alunos.findByEmail(req.body.email)
            .then(user =>{ 
                if(user.length>0){
                    res.status(400).jsonp("Este email já está registado") 
                }
                else {
                    Alunos.insert(req.body)
                        .then(newUser => res.jsonp(newUser))
                        .catch(e => res.status(500).jsonp(e))
                }
            })
            .catch(e => res.status(500).jsonp(e))
    }

}); 


router.get('/',passport.authenticate('jwt',{session:false}) , function(req,res) {
    if(req.user.tipo == "Aluno"){
        Alunos.findById(req.user.userId)
            .then(d => res.jsonp(d))
            .catch(e => res.status(500).send(e))
    }
    else{
        Explicador.findById(req.user.userId)
            .then(d => res.jsonp(d))
            .catch(e => res.status(500).send(e))
    }
})



module.exports = router;