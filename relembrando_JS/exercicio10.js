let clientes = [
  { nome: "Fernanda Piereti", idade: 32, empresa: "Google" },
  { nome: "Juliana Paz", idade: 29, empresa: "Globo" },
  { nome: "Maria Silva", idade: 33, empresa: "Google" },
];

function workUdemy(lista){
  return lista.empresa == "Udemy"
}

let info = clientes.find(workUdemy);

console.log(info)