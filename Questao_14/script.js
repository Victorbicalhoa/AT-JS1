function comparaStringCaseInsensitive(strA, strB){
   let lstrA = strA.toLowerCase()
   let lstrB = strB.toLowerCase()
   return lstrA === lstrB
}


console.log(comparaStringCaseInsensitive("Victor", "victoR"))
console.log(comparaStringCaseInsensitive("teste", "TESTE"))
console.log(comparaStringCaseInsensitive("Hebert", "VictoR"))