// busca si un numero es primo
const numeroPrimo = numeroComparable => {
    for (var i = 2; i < numeroComparable; i++) {
      if (numeroComparable % i === 0) {
        return false;
      }
    }
    return numeroComparable !== 1;
  }
  console.log(numeroPrimo(4))
  console.log(numeroPrimo(process.argv[2]))


