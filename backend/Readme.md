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


## Autenticação
### Rotas
#### Registo
`192.168.1.230:3000/`

```js
req.body = {
    name: String,
    email : String,
    password: String,
    phone: String,
    tipo: String //    Explicador ou Explicando
}
```
___

#### Login
`192.168.1.230:3000/login`

```js
req.body = {
    email: String,
    password: String
}
```

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

#### Adicionar área de conhecimento
`192.168.1.230:3000/explicadores/adicionarPar`

```js
req.body = {
    area: String,   // POR EXEMPLO:    Estudo do meio
    ano: String     // POR EXEMPLO:    1º ano
}
```
**Precisa do token do explicador no header**.

___

## Pedido

### Model
```js
Pedido = {
    area: { type: String, required: true },
    ano : { type: String, required: true },
    mensagem : { type: String, required: true },
    aluno_id: { type: String, required: true },
    explicador_id : { type: String, required: true, default: null  },
    estado: { type : String, required: true, default: "Pendente"}
});
```

Estados disponíveis: `Pendente | Aceite`


### Rotas

#### Criar Pedido
`192.168.1.230:3000/pedidos`

```js
req.body = {
    area: String,
    ano: String,
    mensagem: String
}
```

**Precisa do token do aluno no header**.