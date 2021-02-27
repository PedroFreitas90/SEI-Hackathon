var express = require('express');
var router = express.Router();

var passport = require('passport')
var bcrypt = require('bcryptjs')

var GenerateToken = require('../security/generateToken')

var Alunos = require('../controllers/alunos');


router.get('/', passport.authenticate('jwt',{session:false}), function(req,res) {
    
    Alunos.findById(req.user.userId)
        .then(d => res.jsonp(d))
        .catch(e => res.status(500).send(e))
})



module.exports = router;