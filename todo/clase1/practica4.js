const fs = require('fs');
/*
// Crea un archivo
fs.writeFile('./Practica2/nuevacarpeta/text.txt', '¡Hola cara de bola!', (error) => {
    if(error) throw error;
    console.log('Archivo creado exitosamente');
})
// Promesa
writeFile = () => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./Practica4/text.txt', '¡Hola cara de bola!', (error) => {
            if(error) reject(error);
            else resolve();
        })
    })
}
writeFile()
.then(() => {
    console.log("Archivo creado correctamente");
})
.catch((error) => {
    console.log(error);
})
//Async Await
writeFile = async() => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./Practica4/text.txt', '¡Hola cara de bola!', (error) => {
            if(error) reject(error);
            else resolve();
        })
    })
}
(async () => {
    try {
        await writeFile();
        console.log("Archivo creado correctamente");
    } catch (error) {
        throw new Error(error);
    }
})();












// Lee un archivo
// Normal
fs.readFile('./Practica4/text.txt', 'utf-8', (error, data) => {
    if(error) throw error;
    console.log(data);
})
// Promesa
readFile = () => {
    return new Promise ((resolve, reject) => {
        fs.readFile('./Practica4/text.txt', 'utf-8', (error, data) => {
            if (error) reject(error);
            else resolve (data);
        })
    })
}
readFile()
.then((lectura) => {
    console.log(lectura);
    console.log("Archivo leído correctamente");
})
.catch((error) => {
    console.log(error);
})
//Async Await
readFile = async() => {
    return new Promise ((resolve, reject) => {
        fs.readFile('./Practica4/text.txt', 'utf-8', (error, data) => {
            if (error) reject(error);
            else resolve (data);
        })
    })
}
(async () => {
    try {
        let datos = await readFile();
        console.log(datos);
    } catch (error) {
        throw new Error(error);
    }
})();











//Modifica un archivo desde lo último escrito
fs.appendFile('./Practica2/text.txt', ', modificación creada con append', (error) => {
    if(error) throw error;
    console.log("Archivo modificado correctamente");
})
//Promesa
appendFile = () => {
    return new Promise ((resolve, reject) => {
        fs.appendFile('./Practica4/text.txt', ', modificación creada con append', (error) => {
            if (error) reject(error);
            else resolve();
        })
    })
}
appendFile()
.then(() => {
    console.log("Archivo modificado correctamente");})
.catch((error) => {
    console.log(error);
})
//Async Await
appendFile = async() => {
    return new Promise ((resolve, reject) => {
        fs.appendFile('./Practica4/text.txt', ', modificación creada con append', (error) => {
            if (error) reject(error);
            else resolve();
        })
    })
}
(async () => {
    try {
        await appendFile();
        console.log("Archivo modificado correctamente");
    } catch (error) {
        throw new Error(error);
    }
})();










//Para borrar
fs.unlink('./Practica2/text.txt', (error) =>{
    if(error) throw error;
    console.log("Archivo borrado correctamente");
})
//Promesa
unlink = () => {
    return new Promise ((resolve, reject) => {
        fs.unlink('./Practica4/text.txt', (error) =>{
            if (error) reject(error);
            else resolve();
        })
    })
}
unlink()
.then(() => {
    console.log("Archivo borrado correctamente");})
.catch((error) => {
    console.log(error);
})
//Async Await
unlink = async() => {
    return new Promise ((resolve, reject) => {
        fs.unlink('./Practica4/text.txt', (error) =>{
            if (error) reject(error);
            else resolve();
        })
    })
}
(async () => {
    try {
        await unlink();
        console.log("Archivo borrado correctamente");
    } catch (error) {
        throw new Error(error);
    }
})();





//Crear carpetas
fs.mkdir('./Practica4/nuevacarpeta', (error) => {
    if(error) throw error;
    console.log("Directorio creado correctamente");
})
//Promesa
mkdir = () => {
    return new Promise ((resolve, reject) => {
        fs.mkdir('./Practica4/nuevacarpeta', (error) => {
            if (error) reject(error);
            else resolve();
        })
    })
}
mkdir()
.then(() => {
    console.log("Directorio creado correctamente");})
.catch((error) => {
    console.log(error);
})
//Async Await
mkdir = async() => {
    return new Promise ((resolve, reject) => {
        fs.mkdir('./Practica4/nuevacarpeta', (error) => {
            if (error) reject(error);
            else resolve();
        })
    })
}
(async () => {
    try {
        await mkdir();
        console.log("Directorio creado correctamente");
    } catch (error) {
        throw new Error(error);
    }
})();












//Leer contenido de carpeta, si le pongo true nos da un objeto con name, path y metadata.
fs.readdir('./Practica4/nuevacarpeta', {withFileTypes: false}, (error, files) => {
    if (error) throw error;
    files.forEach(file => {
        console.log(file);
    })
})
//Promesa
readdir = () => {
    return new Promise ((resolve, reject) => {
        fs.readdir('./Practica4/nuevacarpeta', {withFileTypes: false}, (error, files) => {
            if (error) reject(error);
            else resolve(files);
        })
    })
}
readdir()
.then((files) => {
    files.forEach(file => {
        console.log(file);
    })
})
.catch((error) => {
    console.log(error);
})
//Async Await
readdir = async() => {
    return new Promise ((resolve, reject) => {
        fs.readdir('./Practica4/nuevacarpeta', {withFileTypes: false}, (error, files) => {
            if (error) reject(error);
            else resolve(files);
        })
    })
}
(async () => {
    try {
        const files = await readdir();
        files.forEach(file => {
            console.log(file);
        })
    } catch (error) {
        throw new Error(error);
    }
})();












//Remover directorio, true nos permitira borrar aunque el directorio tenga contenido.
fs.rmdir('./Practica2/nuevacarpeta', {recursive:true}, (error) => {
    if(error) throw error;
    console.log("Directorio eliminado correctamente");
})
//Promesa
rmdir = () => {
    return new Promise ((resolve, reject) => {
        fs.rmdir('./Practica4/nuevacarpeta', {recursive:true}, (error) => {
            if (error) reject(error);
            else resolve();
        })
    })
}
rmdir()
.then(() => {
    console.log("Directorio eliminado correctamente");})
.catch((error) => {
    console.log(error);
})
//Async Await
rmdir = async() => {
    return new Promise ((resolve, reject) => {
        fs.rmdir('./Practica4/nuevacarpeta', {recursive:true}, (error) => {
            if (error) reject(error);
            else resolve();
        })
    })
}
(async () => {
    try {
        await rmdir();
        console.log("Directorio eliminado correctamente");
    } catch (error) {
        throw new Error(error);
    }
})();
*/