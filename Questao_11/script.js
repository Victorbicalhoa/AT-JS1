let valorDoProduto = parseInt(prompt("Digite o valo do produto:"))
let verificacao =  prompt("O produto está em promoção? (s/n)").toLocaleLowerCase()
let isPromocao

if(verificacao === "s" || verificacao === "n"){
    isPromocao = verificacao === "s"

    if(valorDoProduto < 200 && !isPromocao){
        alert("Barato")
    } else if ((valorDoProduto > 200 && valorDoProduto < 3000) && isPromocao){
        alert ("Moderado")
    } else if (valorDoProduto > 3000 ) {
        alert("Caro")
    } else{
        alert("Nada a declarar")
    }

} else{
    alert("Digite 's' ou 'n'")
}


