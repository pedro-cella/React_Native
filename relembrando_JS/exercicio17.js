function mostrarInfo(usuario){
  let {nome, idade} = usuario
  return `${nome} tem ${idade} anos.`;
}

console.log(mostrarInfo({ nome: "Angelina Jolie", idade: 46}));