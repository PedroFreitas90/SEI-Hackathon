var express = require('express');
var router = express.Router();

var passport = require('passport')
var bcrypt = require('bcryptjs')

var GenerateToken = require('../security/generateToken')

var Explicador = require('../controllers/explicadores');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// LOGIN
router.post('/login', function(req,res){
    Explicador.findByEmail(req.body.email)
        .then(explicador => {
            if(explicador.length == 1){
                
                if (bcrypt.compareSync(req.body.password, explicador[0].password)){
                    var responseExplicador  = {}
                    responseExplicador.id = explicador[0].id
                    responseExplicador.name = explicador[0].name
                    responseExplicador.email = explicador[0].email
                    responseExplicador.phone = explicador[0].phone
                    responseExplicador.token = GenerateToken.generateTokenBackend(explicador[0].id , "Explicador")
                    res.jsonp(responseExplicador);
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
  
    Explicador.findByEmail(req.body.email)
        .then(user =>{ 
            if(user.length>0){
                res.status(400).jsonp("Este email já está registado") 
            }
            else {
                Explicador.insert(req.body)
                    .then(newUser => res.jsonp(newUser))
                    .catch(e => res.status(500).jsonp(e))
            }
      
        })
        .catch(e => res.status(500).jsonp(e))
}); 

module.exports = router;