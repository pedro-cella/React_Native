var programador = [
  {
    nome: "Julia Pascoal",
    skills: ["Python", "Bash", "Linux"]
  },
  {
    nome: "Patricia Silveira",
    skills: ["JavaScript", "Flutter", "Ruby"]
  }
]

console.log(`O(a) programador(a) ${programador[0].nome} possui as skills: ${programador[0].skills.slice(0, -1).join(", ")+" e "+programador[0].skills.slice(-1)}`)
console.log(`O(a) programador(a) ${programador[1].nome} possui as skills: ${programador[1].skills.slice(0, -1).join(", ")+" e "+programador[1].skills.slice(-1)}`)