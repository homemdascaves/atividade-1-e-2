let quantidadeDeProdutos
let precoDeCadaUnidade
let valorTotal


quantidadeDeProdutos = parseInt(prompt("Informe a quantidade de produtos"))
precoDeCadaUnidade = parseFloat(prompt("Informe o preço das unidades"))

valorTotal = quantidadeDeProdutos * precoDeCadaUnidade

alert("O valor total da compra é R$" + valorTotal)