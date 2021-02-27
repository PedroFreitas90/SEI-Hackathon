var express = require('express');
var router = express.Router();

var passport = require('passport')
var bcrypt = require('bcryptjs')

var GenerateToken = require('../security/generateToken')

var Alunos = require('../controllers/alunos');


/*
// LOGIN
router.post('/login', function(req,res){
    Alunos.findByEmail(req.body.email)
        .then(aluno => {
            if(aluno.length == 1){
                
                if (bcrypt.compareSync(req.body.password, aluno[0].password)){
                    var responseAluno  = {}
                    responseAluno.id = aluno[0].id
                    responseAluno.name = aluno[0].name
                    responseAluno.email = aluno[0].email
                    responseAluno.phone = aluno[0].phone
                    responseAluno.token = GenerateToken.generateTokenBackend(aluno[0].id , "Aluno")
                    res.jsonp(responseAluno);
                }
                else {
                  res.status(400).jsonp("Utilizador ou password errados!");
                }
            }
            else{
                res.status(400).jsonp("Utilizador ou password errados!")
            }
        })
        .catch(error => {
            res.status(500).jsonp(error);
        })
});

// REGISTO
router.post('/', function(req,res) {
    var newHash = bcrypt.hashSync(req.body.password);
    req.body.password = newHash
  
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
}); 
*/


module.exports = router;