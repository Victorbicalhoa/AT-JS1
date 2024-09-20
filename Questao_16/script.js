let largura = parseInt(prompt("Digite a largura do retângulo:"))
let altura = parseInt(prompt("Digite a altura do retângulo:"))

function imprimeRetangulo(largura, altura){
   let linha = "*".repeat(largura) 

   for(i = 0; i < altura; i++){
      console.log(linha)
   }
}

imprimeRetangulo(largura, altura)
