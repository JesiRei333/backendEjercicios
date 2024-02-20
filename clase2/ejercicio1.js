const sumarPares = numero => {
    contadorFinal=0
    for (let i = 0; i <= numero; i += 2){
    contadorFinal += i
}
return contadorFinal
}

console.log(sumarPares (10)) //impresión normal
console.log(sumarPares(process.argv[2])) //se add dinamico