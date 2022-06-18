function contar(){
     var inicio = window.document.querySelector('#txti') 
     var fim = window.document.getElementById('txtf')
     var passo = window.document.querySelector('#txtp') 
     var res = window.document.querySelector('#res')

     if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){ /*Pegando o valor dos elementos através do value e o length mostra o tamanho da string, ou seja, se o tamanho da string for gual a 0 é porque os campos estão em branco*/
          window.alert('Erro. Faltam dados!')
     }else{
          res.innerHTML = 'Contando: '/*Serve para depois eu fazer a concatenação com os números*/
          var i = Number(inicio.value)
          var f = Number(fim.value)
          var p = Number(passo.value)

          if(p <= 0){ /*Serve para verificar o campo de passo, ou seja, se por um a caso esse campo ficar em branco, o usuário automaticamente será avisado que o passo recebeu 1*/
               window.alert('Passo inválido! Considerendo passo com o valor de 1')
               p = 1
          }

          if (i < f) {//CONTAGEM CRESCENTE

               for (var c = i; c <= f; c += p){
                    res.innerHTML += `${c} \u{1F449}` /*No JS quando quiser colocar um emoji, deve-se substituir o U+ do código do emoji e colocar o \u{caracteresdecódigodoemoji}*/              
               }
               
          }else{//CONTAGEM DECRESCENTE
               for (var c = i; c >= f; c -= p){
                    res.innerHTML += `${c} \u{1F449}`    
               }
                          
          }
          res.innerHTML += `\u{1F3C1}`
            
     } 
  

}