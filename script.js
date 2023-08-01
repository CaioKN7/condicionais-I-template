//Prática 1


/* const testeBooleanos = (booleano1, booleano2) =>{
    
    if (booleano2 === true) {

    alert("booleano selecionado é true.");
        
    } else {
    alert("booleano selecionado não é true.")
        
    }
    
}

testeBooleanos(true, false) */

//Prática 2


/* const verificarBooleanos = (booleano1, booleano2, booleano3) => {
    if (booleano1 === booleano2) {
        alert("booleano1 e booleano2 são iguais.");
    }else if (booleano2 === booleano3) {
        alert("booleano2 e booleano3 são iguais.");
    }else if (booleano1 === booleano3) {
        alert("booleano1 e booleano3 são iguais.");
    }else {
        alert("insira um valor booleano 'true' ou 'false'.");
    }
  }
  
  
  verificarBooleanos(true, false, true); */

  //Prática 3

/*   const verificarSePodeVotar = (idade) => {
    if(idade >=18 && idade < 70){
        console.log('Voto obrigatório')
     } else if(idade >=16 && idade <18){
        console.log('Tem direito ao título de eleitor')
     } else if (idade >= 70){
        console.log('Vote caso queira');
     } else if (idade < 16) {
        console.log('Vá assistir dragon ball');
     } else {
        console.log('Coloque uma idade correta');
     }    
    
    
}

verificarSePodeVotar(27) */

//Prática 4 com prompt usando a prática 3 (Sugestão Fayra)
const anoAtual = 2023
const anoNascimento = +prompt("Em qual ano você nasceu?")
const idade = anoAtual - anoNascimento


const verificarSePodeVotar = (idade) => {
    if(idade >=18 && idade < 70){
        console.log('Voto obrigatório')
     } else if(idade >=16 && idade <18){
        console.log('Tem direito ao título de eleitor')
     } else if (idade >= 70 && idade < 120){
        console.log('Vote caso queira');
     } else if (idade < 16) {
        console.log('Vá assistir dragon ball');
     } else if (idade >= 120) {
        console.log('Tem certeza que sua idade é essa? liga pro guiness book ou corrija sua idade');
     } else {
        console.log(`Você me enviou um "${anoNascimento}" que significa "Not a Number (Não é um número)". Atualize a página e tente mais uma vez.`)
     } 
    
    
}

verificarSePodeVotar(idade)