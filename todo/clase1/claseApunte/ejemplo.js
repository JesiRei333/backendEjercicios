
const fs = require ('fs') 

//manejo de archivos txt//

//crea//
/*fs.writeFile('./test.txt', 'hola Koders!', (error)=>{
    if (error) throw error
   console.log('Archivo  creado correctamete')
})

//lee//
 fs.readFile('./test.txt', 'utf-8', (error, data)=>{
    if (error) throw error
    console.log('Contenido del archivo:' + data)
})

//edita del ultimo texto add
fs.appendFile('./test.txt', ', los saludo desde NodeJs!', (error)=>{
    if (error) throw error
   console.log('Archivo  modificado correctamete')
})
*/

//elimina//

/*fs.unlink('./test.txt', (error)=>{
    if (error) throw error
   console.log('Archivo  eliminado correctamete')
})*/



//manejo de carpetas//
/*
fs.mkdir('./carpeta', (error, data)=>{
    if (error) throw error
    console.log('Carpeta creada correctamente')
})

fs.writeFile('./carpeta/test.txt', 'hola Koders!', (error)=>{
    if (error) throw error
   console.log('Archivo  creado correctamete')
})
*/

//leer los archivos dentro de una carpeta//

/* fs.readdir('./carpeta', {withFileTypes: false}), (error, files) =>{
    if (error) throw error

    files.forEach(file=>{
        console.log(file)
    });
}
*/

// eliminar la carpeta//
fs.rmdir('./carpeta',{recursive: true}, (error)=>{
    if (error) throw error
    console.log('Carpeta eliminada correctamente')
})

