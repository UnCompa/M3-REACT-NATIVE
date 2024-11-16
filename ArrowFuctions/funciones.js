const ejecutarSumar = () => {
  const valor1 = recuperarEntero("txtValor1")
  const valor2 = recuperarEntero("txtValor2")
  console.log(valor1);
  console.log(valor2);
  const resultado = sumar(valor1,valor2)
  console.log(resultado);
}
const ejecutarResta = () => {
  const valor1 = recuperarFloat("txtValor1")
  const valor2 = recuperarFloat("txtValor2")
  console.log(valor1);
  console.log(valor2);
  const resultado = restar(valor1,valor2)
  console.log(resultado);
}

const sumar = (valor1, valor2) => {
  return valor1 + valor2
}
const restar = (valor1, valor2) => {
  return valor1 - valor2
}