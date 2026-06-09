let quantidaDeDeHoras
let valorPagoPorHora
let salarioSemanal

quantidaDeDeHoras = parseFloat(prompt("Informe a quantidade de horas trabalhadas"))
valorPagoPorHora = parseFloat(prompt("Informe o valor pago por hora"))

salarioSemanal = quantidaDeDeHoras * valorPagoPorHora

alert("O salário semanal é R$ " + salarioSemanal)