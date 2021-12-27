let clientes = [
  { nome: "Fernanda Piereti", idade: 32, empresa: "Google" },
  { nome: "Juliana Paz", idade: 29, empresa: "Globo" },
  { nome: "Maria Silva", idade: 33, empresa: "Google" },
];

function overSixty(lista){
  return lista.idade > 60;
}

let idosos = clientes.map(function(pessoa){
  return {nome: pessoa.nome, idade: pessoa.idade * 2, empresa: pessoa.empresa };
}).filter(overSixty)

console.log(idosos);