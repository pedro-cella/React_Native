let apresentarDados = (array) => {
  let [x, ...y] = array
  console.log(`x -> ${x}`)
  console.log(`y -> ${y}`)
}

let lista = [1, 2, 3, 4, 5, 6];

apresentarDados(lista);