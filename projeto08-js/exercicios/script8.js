const pacientes = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: "José",
    age: 40,
    weight: 78,
    height: 175
  },
  {
    name: "Maria",
    age: 32,
    weight: 62,
    height: 170
  }
]

let nomesPacientes = []

// for(let i=0; i<pacientes.length; i++){
//   nomesPacientes[i] = pacientes[i].name
// }

for (let paciente of pacientes){
  nomesPacientes.push(paciente.name)
}
alert(nomesPacientes)

