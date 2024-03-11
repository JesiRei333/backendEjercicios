const express= require ('express')
const app = express()
const userRoutes = require ('./src/routes/users') // aqui se esta importando users.js 
const port = 3000

const auth = (req, res, next) =>{
    const {authorization} = req.headers
    if (!authorization){
        res.status(401).send({message:"auth is required"})
    }
    next ()
}


app.use (express.json())
app.use('/users', userRoutes)
//app.use (auth) //con este aplica a todo lo que este por debajo de el
//app.use('/users', auth, userRoutes)//aplica especificamente a users (el que imprime todos)


app.get('/', (req, res) => {
  res.status(200).send({message:"ok"})
})

app.get('/hi', (req, res) => {
    res.status(200).send({message:"Hola koders"})
  })


  app.post('/', (req, res) => {
    console.log(req.body)
    res.status(201).send({message:"post ok"})
  })


  app.put('/', (req, res) => {
    res.status(200).send({message:"put ok"})
  })

  app.delete('/', (req, res) => {
    res.status(200).send({message:"delete ok"})
  })


  //practica 1
app.get('/userUsuario', (req, res) => {

    user= [{
        id : 1,
        name : "Jesica",
        mail: "12345@gmail.com",
        password: "12345"
    }]
    res.status(200).send(user)
  })


  //validacion de un usuario no es ideal con post, deberia ser con get
  app.post('/userUsuario', (req, res) => {
    let {id}=req.body

   const users= [{
        id : 1,
        name : "Jesica",
        mail: "12345@gmail.com",
        password: "12345"
    }]

    const user= users.find (u => u.id == id)
if (user) {
    res.send ({message : "user data", data: user})
} else {
    res.status(404).send({message: "user not found"})
}
})

//validacion correcta de un usuario colocando la variable id en ruta con ":"
app.get('/userUsuario/:id', (req, res) => {

    let {id}=req.params 

   const users= [{
        id : 1,
        name : "Jesica",
        mail: "12345@gmail.com",
        password: "12345"
    },
    {
        id : 2,
        name : "Jes",
        mail: "123@gmail.com",
        password: "123"
    }
]

    const user= users.find (u => u.id == id)
if (user) {
    res.send ({message : "user data", data: user})
} else {
    res.status(404).send({message: "user not found"})
}
})


//validacion correcta de un usuario colocando la variable 
//id en ruta con ":"
//async

app.get('/userasync/:id', async (req, res) => {
try {

    let {id}=req.params 

   const users= [{
        id : 1,
        name : "Jesica",
        mail: "12345@gmail.com",
        password: "12345"
    },
    {
        id : 2,
        name : "Jes",
        mail: "123@gmail.com",
        password: "123"
    }
]

    const user= users.find (u => u.id == id)
if (user) {
    res.send ({message : "user data", data: user})
} else {
    res.status(404).send({message: "user not found"})
}

} catch (error) {
    res.status(400).send({message: error})
}
})
    


//reto
/* Crea el endpoint /math/isEven con el metodo GET y que reciba un número como argumento de ruta. 
Devolver en la respuesta el json {even:true} si el número es par o {even: fasle} si no lo es.*/

app.get('/math/isEven/:num', (req, res) => {
    let {num} = req.params;

    const resultado = Math.round(num) % 2;

    const par = {
        even: "true"
    }
    const impar = {
        even: "false"
    }

    if(resultado === 0){
        res.send({data: par});
    } else {
        res.send({data: impar});
    }
})


/* Crea el endpoint /math/allEven con el metodo GET y que reciba un número como argumento de ruta. 
Devolver en la respuesta el JSON {even: [0,2,4,6,8...]} donde los elementos del array son los 
números pares desde 0 hasta el número recibido por argumento.*/
app.get('/math/allEven/:num', (req, res) => {
    let {num} = req.params;
    let numero = Math.round(num);
    let arrayResultado = [];

    for (let i= 0; i<= num; i+=2){
        arrayResultado.push(i)
    }
    res.send(arrayResultado)
})


 

//asignar valores en los params del url
app.get('/hiname/:name/:lastName', (req, res) => {
    console.log(req.params)
    const {name}=req.params
    res.status(200).send({message:"Hola " + name })
  })

  //"?" modifica el string y lo que este a la izquierda
  //puede esxistir una o cero veces
app.get('/ab?cd', (req, res) => {
    res.status(200).send({message:"Hola " })
  })

  
  //"?" modifica el string y lo que este a la izquierda
  //puede esxistir una o más veces (repetido)
app.get('/ef+gh', (req, res) => {
    res.status(200).send({message:"Hola " })
  })

   //"?" modifica el string y lo que este en medio
  //sin importar lo que sea se acepta, comodín
app.get('/ij*kl', (req, res) => {
    res.status(200).send({message:"Hola " })
  })

//activacion de users.js que importamos
app.use ('/users', userRoutes)


//bucle infinito
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) //bucle infinito en espera de solicitudes

