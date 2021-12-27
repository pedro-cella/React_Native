function maior_de_idade(idade){
  return new Promise(function(resolve, reject) {
    setTimeout(idade > 18 ? resolve : reject, 3000)
  });
}

maior_de_idade(21)
  .then(function() {
      console.log("Maior de idade")
  })
  .catch(function() {
    console.log("Menor de idade")
  });