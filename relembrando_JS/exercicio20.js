let alterarDados = (cliente) => {
    let cliente1 = {...cliente, nome: "Felicity Jones"}
    let cliente2 = {...cliente}
    let mudaPais = {...cliente.endereco};
    mudaPais.pais = "EUA";
    cliente2.endereco = {...mudaPais}
    return [cliente1, cliente2]
}

let cliente = {
  nome: "Angelina Jolie",
  idade: 48,
  endereco: {
    cidade: "Campo Grande",
    uf: "MS",
    pais: "Brasil",
  }
};

console.log(alterarDados(cliente));