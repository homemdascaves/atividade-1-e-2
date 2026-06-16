let lado1 = prompt("Informe o primeiro lado do triângulo")
let lado2 = prompt("Informe o segundo lado do triângulo")
let lado3 = prompt("Informe o terceiro lado do triângulo")

// isosceles = dois lados iguais
// escaleno = tres lados iguais
// equilatero = todos os lados são iguais

if(lado1 == lado2 && lado1 == lado3)
{
    alert("O triângulo informado é equilátero")
}else if(lado2 != lado3 && lado3 != lado1 && lado1 != lado2)
{
   alert("O triângulo é escaleno")
}else
{
    alert("O triângulo é um isósceles")
}