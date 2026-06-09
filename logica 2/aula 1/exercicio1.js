let distancia //entrada - input
let combustivelEmLitros // entrada - input
let consumoMedio // saida - output

distancia = prompt("Informe o valor da distanicia percorrida em KM")
combustivelEmLitros = prompt("Informe a quantidade gasta de combustivel em litros")

distancia = parseFloat(distancia)
combustivelEmLitros = parseFloat(combustivelEmLitros)

consumoMedio = distancia / combustivelEmLitros

alert("O consumo médio do veículo é: " + consumoMedio + "litros")