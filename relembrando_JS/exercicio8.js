let clientes = [
  { nome: "Fernanda Piereti", idade: 32, empresa: "Google" },
  { nome: "Juliana Paz", idade: 29, empresa: "Globo" },
  { nome: "Maria Silva", idade: 33, empresa: "Google" },
];

let idades_clientes = clientes.map(function(idadeClientes){
  return idadeClientes.idade;
});

console.log(idades_clientes);