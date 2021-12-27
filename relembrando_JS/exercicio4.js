function nivel_de_programador(experiencia_em_anos){
  if(experiencia_em_anos >= 0 && experiencia_em_anos <= 1){
    console.log("Iniciante");
  }else if(experiencia_em_anos > 1 && experiencia_em_anos <= 3){
    console.log("Intermediario");
  }else if(experiencia_em_anos > 3 && experiencia_em_anos <= 6){
    console.log("Avancado")
  }else if(experiencia_em_anos >= 7){
    console.log("Jedi Fuck Master")
  }
}

let experiencia = 4;
nivel_de_programador(experiencia)