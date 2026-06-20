let notaFinalDoAluno

notaFinalDoAluno = prompt("Informe a nota final do aluno")

if(notaFinalDoAluno >= 7)
{
    alert("Aprovado")
}
if(notaFinalDoAluno >= 5 && notaFinalDoAluno < 7)
{
    alert("Recuperação")
}
if(notaFinalDoAluno < 5)
{
    alert("Reprovado")
}
