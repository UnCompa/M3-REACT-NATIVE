const recuperarTexto = (idComponente) => document.getElementById(idComponente).value
const recuperarEntero = (idComponente) => {
  let valor = parseInt(document.getElementById(idComponente).value)
  return valor
}
const recuperarFloat = (idComponente) => {
  let valor = parseFloat(document.getElementById(idComponente).value)
  return valor
}