let anoAtual = parseInt(prompt("Digite o ano atual"))
let mesAtual = parseInt(prompt("Digite o mes atual"))
let idade = parseInt(prompt("Digite a idade"))
let mesesAteAniversario = parseInt(prompt("Digite quantos meses faltam para o aniversario"))
let anoNascimento = anoAtual - idade
let mesNascimento

if (mesesAteAniversario > 0){
    mesNascimento = mesAtual + mesesAteAniversario
    anoNascimento--
} else{
    mesNascimento = mesAtual + mesesAteAniversario
    anoNascimento--
}

alert(`O ano de nasciemento é ${anoNascimento} e o mes de nascimento é ${mesNascimento}`)