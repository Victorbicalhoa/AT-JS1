let reais = parseFloat(prompt("Digite um valor em reais:"))
let centavos

function reaisParaCentavos(){
    centavos = reais * 100
}

reaisParaCentavos(reais)
console.log(centavos)