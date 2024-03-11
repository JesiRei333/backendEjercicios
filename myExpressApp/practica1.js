const express= require ('express')
const app = express()
const port = 3000

//http//127.0.0.1:3000 -- http://localhost:3000/

app.get('/', (req, res) => {
  res.status(200).send({message:"ok"})
})




  
app.get('/user', (req, res) => {

    user= [{
        id : 1,
        name : "Jesica",
        mail: "12345@gmail.com",
        password: "12345"
    }]
    res.status(200).send(user)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) //bucle infinito en espera de solicitudes