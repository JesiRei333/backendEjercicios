//duplicar elementos de un array

const arregloDuplicado = arregloArgv => {
    let arregloPorDos= arregloArgv.slice()
    let doble = (x)=>x*2
    return console.log ( arregloPorDos.map(doble))
}

//arregloDuplicado ([20, 10, 5, 3])


let argvSinDosPosiciones = process.argv.slice(2)
arregloDuplicado (argvSinDosPosiciones)


