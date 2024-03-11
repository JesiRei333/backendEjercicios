/* 
Genera un método el cuál obtenga información de un archivo local (.JSON)
y agregue la clave "read" con valor "true"
Criterios de aceptación:
    - La ruta del archivo JSON debe obtenerse por agumentos
    - La clave read debe guardarse en el archivo no solo en pantalla
    NOTA: puedes usar JSON.stringify y JSON.parse
*/
const fs = require('fs');

modificarJSON = (ruta) => {
    let contenedorJSON = {};
    fs.readFile(ruta, 'utf-8', (error, data) => {
        if (error) throw error;
        contenedorJSON = JSON.parse(data);
        contenedorJSON.read = true;
        contenedorJSON = JSON.stringify(contenedorJSON, null, 4);
        fs.writeFile(ruta, contenedorJSON, (error) => {
            if (error) throw error;
            console.log(contenedorJSON);
        })
    })
}

modificarJSON(process.argv[2]);