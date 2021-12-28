somar = (...valores) => {
  soma = 0
  valores.forEach(resultado => {
    soma += resultado;
  })
  return soma
}

console.log(somar(1, 2, 3, 4, 5, 6));
console.log(somar(42, 44));