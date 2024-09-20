let idade = parseInt(prompt("Digite a idade do usuário:"))
let verificacao = prompt("O usuário é premium? (S/n)").toLocaleLowerCase()
let isPremium

if (idade >= 21 && (verificacao === "s" || verificacao === "n")){  
    isPremium = verificacao === "s"
 
} else{
    console.log("O usuário deve ter no mínimo 21 anos e responda 's' ou 'n'." )
}
console.log(isPremium)

let isAcessoConcedido = isPremium ? "Acesso Concedido" : "Acesso Negado"
console.log(isAcessoConcedido)

