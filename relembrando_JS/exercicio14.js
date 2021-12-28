let nome = "Fernanda Lima";
let idade = 34;

mostrarUsuario = (nome = "Fernanda Lima", idade = 19) => {
  return { nome, idade };
};

console.log(mostrarUsuario(nome, idade));
console.log(mostrarUsuario(nome));