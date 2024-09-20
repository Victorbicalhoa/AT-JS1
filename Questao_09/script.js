let diaDaSemana = parseInt(prompt("Digite um número de 1 a 7"))

switch (diaDaSemana) {
    case 1:
        console.log("Segunda-feira")
        break;
    case 2:
        console.log("Terça-feira")
        break;
    case 3:
        console.log("Quarta-feira")
        break;
    case 4:
        console.log("Quinta-Feira")
        break;
    case 5:
        console.log("Sexta-feira")
        break;
    case 6:
        console.log("Sábado")
        break;
    case 7:
        console.log("Domingo")
        break;

    default:
        console.log("Número invlálido")
        break;
}
