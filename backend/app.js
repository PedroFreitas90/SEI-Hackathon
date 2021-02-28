var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

const DATABASE_NAME = 'SEI';
const CONNECTION= "mongodb+srv://admin:Puys0OX8P4b81XMr@amcyni.wi8yb.mongodb.net/SEI?retryWrites=true&w=majority"
mongoose.connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to Mongo at [${DATABASE_NAME}] database...`))
  .catch((erro) => console.log(`Mongo: Error connecting to [${DATABASE_NAME}]: ${erro}`))

/****************************
* AUTHENTICATION [JWT]
****************************/
var passport = require('passport')
var JWTStrategy = require('passport-jwt').Strategy
var ExtractJWT = require('passport-jwt').ExtractJwt

var extractFromQS = function (req) {
  var token = null
  if (req.query && req.query.token) token = req.query.token
  return token
}

var extractFromBody = function (req) {
  var token = null
  if (req.body && req.body.token) token = req.body.token
  return token
}

var extractFromHeader = function (req) {
  var token = null;
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    token = req.headers.authorization.split(' ')[1];
return token;
}
}

passport.use(new JWTStrategy({
  secretOrKey: 'SEI-hackathon',
  jwtFromRequest: ExtractJWT.fromExtractors([extractFromQS, extractFromBody,extractFromHeader])
}, async (payload, done) => {
  try {
    console.log(payload)
    return done(null, payload)
  }
  catch (error) {
    console.log(error)
    return done(error)
  }

})) 


//-------------

var alunosRouter = require('./routes/alunos');
var explicadoresRouter = require('./routes/explicadores');
var pedidosRouter = require('./routes/pedidos');
var autenticacaoRouter = require('./routes/index');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/alunos', alunosRouter);
app.use('/explicadores', explicadoresRouter);
app.use('/pedidos', pedidosRouter);
app.use('/',autenticacaoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
});

module.exports = app;
