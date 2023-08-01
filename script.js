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

  const verificarSePodeVotar = (idade) => {
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

verificarSePodeVotar(27)