let distanciaPercorrida
let tempoGasto
let velocidadeMedia

distanciaPercorrida = parseFloat(prompt("Informe a distancia percorrida"))
tempoGasto = parseFloat(prompt("Informe o tempo gasto para percorrer a distancia"))

velocidadeMedia = distanciaPercorrida / tempoGasto

alert("Avelocidade média da aeronave é de " + velocidadeMedia + "KM")