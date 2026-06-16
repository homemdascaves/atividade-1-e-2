let aluguelPorDia
let valorPorDia
let valorTotal


aluguelPorDia = parseInt(prompt("Informe a quantidade de dias de aluguel "))
valorPorDia = parseFloat(prompt("Informe o preço por dia "))

valorTotal = aluguelPorDia * valorPorDia

alert("O valor a ser pago é R$" + valorTotal)