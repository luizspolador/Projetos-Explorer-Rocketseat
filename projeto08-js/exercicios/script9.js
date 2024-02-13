const patients = [
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
  },
  {
    name: "Sarah",
    age: 27,
    weight: 53,
    height: 155
  }
]


function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
  return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}
  `
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}