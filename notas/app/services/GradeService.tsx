import { GradeInterfaces } from "../interfaces/Grade.interface";

const notas: GradeInterfaces[] = [{ subject: "Matematicas", grade: 1 }, { subject: "Fisica", grade: 4 }]

export const getNotas = () => {
  return notas;
}

export const addNota = (grade: GradeInterfaces) => {
  notas.push(grade);
}

export const updateNota = (nota: GradeInterfaces) => {
  const index = notas.findIndex((n) => n.subject === nota.subject);
  if (index > -1) {
    notas[index] = nota;
  }
}