//encontrar el numero mayor
const numMayor = arregloArgv => {
    return Math.max (...arregloArgv)
}

//console.log(numMayor([20, 10, 5, 3]))


let argvSinDosPosiciones = process.argv.slice(2)

console.log (numMayor(argvSinDosPosiciones))

