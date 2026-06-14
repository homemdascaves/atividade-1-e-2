let litrosConsumidos
let precoDoCombustivelPorLitro
let valorTotal

litrosConsumidos = parseFloat(prompt("Informe a quantidade de litros q foi consumida"))
precoDoCombustivelPorLitro = parseFloat(prompt("Informe o preço do combustivel"))

valorTotal = litrosConsumidos * precoDoCombustivelPorLitro

alert("A empresa irá gastar R$: " + valorTotal + "para absatecer a sua frota")