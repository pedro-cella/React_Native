class Usuario {
  constructor(email, senha){
    this.email = email;
    this.senha = senha;
  }

  get(){
    return this.email
  }

  set(email){
    this.email = email;   
  }

  get(){
    return this.senha;
  }

  set(senha){
    this.senha = senha;
  }

  ehAdmin(){
    if(this.admin == true){
      return true;
    }else{
      return false;
    }
  }
}

class Admin extends Usuario {
  constructor(email, senha){
    super(email, senha)
    this.admin = true;
  }

  get(){
    this.admin;
  }

  set(admin){
    this.admin = admin;
  }
}


let usuario1 = new Usuario("joao@gmail.com", "senhasegura");
let usuario2 = new Admin("maria@gmail.com", "senhasupersegura");

console.log(usuario1.ehAdmin());
console.log(usuario2.ehAdmin());