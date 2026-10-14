//FUNÇÃO SOMAR
function somar(a, b) {
    return a + b;
}

console.log(somar(10, 5)); // 15

//FUNÇÃO SUBTRAIR
function subtrair(a, b) {
    return a - b;
}

console.log(subtrair(10, 5)); // 5

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida");
  }
  return a / b;
}

module.exports = { somar, subtrair, multiplicar, dividir };