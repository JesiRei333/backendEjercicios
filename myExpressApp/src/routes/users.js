
const express = require ('express')
const router= express.Router()



//Funcion para buscar usuarios
const findUser = async (find) => {
    const users = [{
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
    },
    {
        id : 3,
        name : "Jesss",
        mail: "12333@gmail.com",
        password: "12333"
    }
]
    const key = Object.keys(find)[0];
    const param = find[key];
    const user = users.find(u => u[key] == param)
    if (user) {
        return user
    } else {
        return null
    }
}


const auth = (req, res, next) =>{
   
    const {authorization} = req.headers
    if (!authorization){
        res.status(401).send({message:"auth is required"})
    }
    next ()
}

const isMy = (req,res,next) => {
    const {user, role}= req.headers
    if (user != req.params.id && role != "admin"){
        res.status (401).send ({message:"user no authorized"})
    } else {
        next ()
    }
}


router.post('/login', async (req, res) => {
    
    try {
        const userBody = req.body;
        const user= await findUser ({mail: userBody.mail})

        if (!user) {
            res.status(404).send({message: "user not found"})
        }else{
//TODO comparar contraseñas
            res.status(200).send({message: "login ok", data: "TODO token"})
        }
    } catch (error) {
        res.status(400).send({message:error});
    }
})


 router.use(auth)

//buscar usuarios por id

router.get('/:id', async (req, res) => {
    try {
    
    let {id}=req.params 
    const user= await findUser ({id: id})
      /* const users= [{
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
        },
        {
            id : 3,
            name : "Jesss",
            mail: "12333@gmail.com",
            password: "12333"
        }
    ]
    
        const user= users.find (u => u.id == id)*/
    if (user) {
        res.send ({message : "user data", data: user})
    } else {
        res.status(404).send({message: "user not found"})
    }
    
    } catch (error) {
        res.status(400).send({message: error})
    }
    })


//Obtener lista de usuarios
router.get('/', async (req, res) => {
    try {
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
        },
        {
            id : 3,
            name : "Jesss",
            mail: "12333@gmail.com",
            password: "12333"
        }
    ]
        res.status(200).send({message: "Users", data: users});
    } catch (error) {
        res.status(400).send({message: error});
    }
})

// Publicar usuario nuevo
router.post('/', async(req, res) => {
    try{
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
        },
        {
            id : 3,
            name : "Jesss",
            mail: "12333@gmail.com",
            password: "12333"
        }
    ]
        users.push(req.body);
        res.status(201).send({message: "Users", data: users});
    } catch (error) {
        res.status(400).send({message: error});
    }
})


/*
//Login
router.post('/login', async (req, res) => {
    
    try {
        const userBody = req.body;
        const user= await findUser ({mail: userBody.mail})

        if (!user) {
            res.status(404).send({message: "user not found"})
        }else{
//TODO comparar contraseñas
            res.status(200).send({message: "login ok", data: "TODO token"})
        }
    } catch (error) {
        res.status(400).send({message:error});
    }
})

*/
router.use(isMy)
router.delete('/:id', async(req, res) => {
    try{
        res.send ({message: "user deleted"})
    }catch (error) {
        res.status(400).send({message:error})
    }
})

    module.exports=router //con esto se exporta
    // lo llamaremos en app.js (configuraciones de server)
    // con el nombre de userRoutes