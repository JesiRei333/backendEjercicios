//cuenta las letras de arreglo
function contardorDeLetras (cadena) {
    return [...cadena.replace(/\s/g, '')]
      .reduce((contador, char) => {
        contador[char] = contador[char] + 1 || 1;
        return contador;
      }, {});
  }
  
  console.log(contardorDeLetras("cuantas LetrasSon"));
  
  
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
  