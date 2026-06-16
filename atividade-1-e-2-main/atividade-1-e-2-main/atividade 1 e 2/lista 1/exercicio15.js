let quantidadeDeUnidadesProduzidas
let custoDeFabricacaoDeCadaUnidade
let custoDeProducaoDoLote

quantidadeDeUnidadesProduzidas = parseInt(prompt("Informe a quantidade de produtos produzidos"))
custoDeFabricacaoDeCadaUnidade = parseFloat(prompt("Informe o preço da fabricação do produto"))


custoDeProducaoDoLote = quantidadeDeUnidadesProduzidas * custoDeFabricacaoDeCadaUnidade


alert("O custo da produção do lote é R$: " + custoDeProducaoDoLote)
