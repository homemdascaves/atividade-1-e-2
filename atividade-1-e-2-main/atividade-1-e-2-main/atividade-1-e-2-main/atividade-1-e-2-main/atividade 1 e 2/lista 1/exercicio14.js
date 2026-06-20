let quantidadeDeIngressosVendidos
let precoDosIngressos
let valorArrecadado


quantidadeDeIngressosVendidos = parseInt(prompt("Informe a quantidade de ingressos que foram vendidos"))
precoDosIngressos = parseFloat(prompt("Informe o preço dos ingressos"))

valorArrecadado = quantidadeDeIngressosVendidos * precoDosIngressos

alert("O valor arrecadado com a venda dos ingressos é R$ " + valorArrecadado)