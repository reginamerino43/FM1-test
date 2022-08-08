'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let decimal = 0
  var rev = num.split('').reverse().join('')

  for (let i = 0; i <  rev.length; i++) {
    decimal += rev[i] * 2 ** i
  }
  return decimal
}
console.log(BinarioADecimal(1001110001000))

function DecimalABinario(num) {
  // tu codigo aca
  let res = ''
  while (num > 0){
    res += num % 2
    num = Math.floor(num/2)
  }
  var binario = res.split('').reverse().join('')
  return binario
}
console.log(DecimalABinario(5000))

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}