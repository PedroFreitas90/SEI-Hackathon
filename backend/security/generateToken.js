var jwt = require('jsonwebtoken')

/*
* Creates a JSON Web Token to access the Backend.
* @params {String} userId id do utilizador
* @params {String} tipo tipo do utilizador (alunos | explicador ) 
* @return {string} JSON Web Token
*/
module.exports.generateTokenBackend = (userId,tipo) => {
// Payload: { userId: userID }
// secretOrPrivateKey: "niteGateway"
/*
options: {
  expiresIn: 6 hours,
  issuer: "NITE"
}
*/
  console.log(tipo);
  return jwt.sign(
    {
        userId : userId,
        tipo : tipo 
    }
    ,"SEI-hackathon",
    {
      expiresIn: 60 * 60 * 6 ,
      issuer: "Tikitizi"
    }
  )
};
