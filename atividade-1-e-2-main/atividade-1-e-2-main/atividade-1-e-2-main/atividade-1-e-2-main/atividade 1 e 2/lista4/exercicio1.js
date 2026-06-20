const body = document.querySelector("body")

const print = dator =>  body.innerHTML += "</br>" + dator

const selecoes = ["Brasil", "Argentina", "Uruguai", "Colombia", "Equador"]

selecoes[selecoes.length] = "Equador"
selecoes.push("Costa Rica")
selecoes.push("Haiti")
selecoes.push("Canadá")
selecoes.push("Estados Unidos")

let contador = 0

while(contador % 1 === 0 && contador < selecoes.length)
{
   print(contador + "é impar")
    contador++
}