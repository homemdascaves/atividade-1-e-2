let quantidadeDoProduto
let precoDoProduto
let descontoAplicado

quantidadeDoProduto = parseInt(prompt("Informe a quantidade do produto"))
precoDoProduto = parseFloat(prompt("Informe o preço do produto"))

descontoAplicado = (quantidadeDoProduto * precoDoProduto) / 100

alert("O desconto aplicado é:" + descontoAplicado + "%")

