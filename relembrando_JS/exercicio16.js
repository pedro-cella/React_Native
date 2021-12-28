let cliente = {
  nome: "Angelina Jolie",
  endereco: {
    rua: "Rua da paz",
    numero: 42,
    bairro: "Cachoeira",
    cidade: "Campo Grande",
    uf: "MS",
  }
};

let {nome,endereco: {rua, numero, bairro, cidade, uf}} = cliente

console.log(nome);
console.log(rua);
console.log(numero);
console.log(bairro);
console.log(cidade);
console.log(uf);