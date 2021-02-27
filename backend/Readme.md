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
Explicador = {
    name: { type: String, required: true },
    email : {type :String , required : true},
    password: { type: String, required: true },
    phone: {type:String,required:false}
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
