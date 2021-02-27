# Backend

## Token
```js
token = {
    payload: {
        userId : userId,
        tipo : tipo 
    },
    secretOrPrivateKey: "SEI-hackathon", 
    options: {
        expiresIn: 60 * 60 * 6 ,
        issuer: "Tikitizi"
    }
}
```

O tipo do token pode ser 'Aluno' ou 'Explicador'

____

## Aluno

### Model
```js
Aluno = {
    name: { type: String, required: true },
    email : {type :String , required : true},
    password: { type: String, required: true },
    phone: {type:String, required:false}
};
```
____

### Rotas

#### Registo
`192.168.1.230:3000/alunos`

```js
req.body = {
    name: String,
    email : String,
    password: String,
    phone: String
}
```
___

#### Login
`192.168.1.230:3000/alunos/login`

```js
req.body = {
    email: String,
    password: String
}
```
___

## Explicador
### Model
```js
var pairSchema = {
  area: { type : String, required : true } ,
  ano : { type: String, required : true }
};

Explicador = {
    name: { type: String, required: true },
    email : {type :String , required : true},
    password: { type: String, required: true },
    phone: {type:String,required:false},
    domains: [ { type : pairSchema } ]
};
```

____

### Rotas

#### Registo
`192.168.1.230:3000/explicadores`

```js
req.body = {
    name: String,
    email : String,
    password: String,
    phone: String
}
```
___

#### Login
`192.168.1.230:3000/explicadores/login`

```js
req.body = {
    email: String,
    password: String
}
```

___

#### Adicionar área de conhecimento
`192.168.1.230:3000/explicadores/adicionarPar`

```js
req.body = {
    area: String,   // POR EXEMPLO:    Estudo do meio
    ano: String     // POR EXEMPLO:    1º ano
}
