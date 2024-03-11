//filtrar los numeros pares de un array

const filtroPares = arregloArgv => {
    let arregloFiltrado= arregloArgv.filter(function(num){
        return num % 2 == 0;
      });
    return console.log (arregloFiltrado)
}

let argvSinDosPosiciones = process.argv.slice(2)
filtroPares(argvSinDosPosiciones)

