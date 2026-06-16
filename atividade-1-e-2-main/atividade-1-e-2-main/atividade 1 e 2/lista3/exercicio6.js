let usuario = prompt("Informe o usuário")
let senha = prompt("Informe a senha")

if(usuario != "admin" || senha != "1234")
{
    alert("Acesso negado")
}else
{
    alert("Acesso liberado")
}

