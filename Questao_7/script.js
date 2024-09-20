let numeroCentro = parseInt(prompt("Digite um numero inteiro maior do que 0:"))
let distancia = parseInt(prompt("Digite um numero inteiro maior do que 0:"))
let minimo = numeroCentro - distancia
let maximo = numeroCentro + distancia
let numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo

console.log(numeroAleatorio)
