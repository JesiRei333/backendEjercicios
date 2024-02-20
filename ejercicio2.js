//contador de todas las vocales en un parrafo
const contadorDeVocales = palabra1 => {
    const vocalesIncluidas = "aáeéiíoóuú";
    let sumaVocales = 0;
   let palabra2= [...palabra1.replace(/\s/g, '')]
  
    for (const unaLetra of palabra2) {
        if (vocalesIncluidas.includes(unaLetra.toLowerCase())) {
            sumaVocales++;
        }
    }
    return sumaVocales;
  };
  console.log(contadorDeVocales("hola! ¿cómo estás?"))
  