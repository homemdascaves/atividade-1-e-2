let cand1 = prompt("Informe a nota final do candidato 1")
let cand2 = prompt("Informe a nota final do candidato 2")

if(cand1 > cand2)
{
    alert("O candidato 1 foi o melhor")
}else if(cand2 > cand1)
{
    alert("O candidato 2 foi o melhor")
}else if(cand1 == cand2)
{
    alert("Os candidatos tiveram a mesma pontuação")
}
    