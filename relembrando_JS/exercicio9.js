let clientes = [
  { nome: "Fernanda Piereti", idade: 32, empresa: "Google" },
  { nome: "Juliana Paz", idade: 29, empresa: "Globo" },
  { nome: "Maria Silva", idade: 33, empresa: "Google" },
];

function isGoogled(clientes){
  return clientes.empresa == "Google"
}

let filtro = clientes.filter(isGoogled);
console.log(filtro)