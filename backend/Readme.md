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

