function verificar(){
     var data = new Date()
     var ano = data.getFullYear() /*getFullYear() é para pegar o ano com os 4 digitos*/
     var anoNasci = window.document.querySelector('#txtano')
     var res = window.document.querySelector('#res')

     if((anoNasci.value.length == 0) || (Number(anoNasci.value) > ano)){ /*anoNasci.value.length == 0 está verificando se o comprimento do valor é igual a 0*/  /*anoNasci.value > ano está verificando se o ano de nascimento é maior que o ano atual(consultado pelo sistema)*/
          window.alert('Verifique os dados e tente novamente!')
     }else{
          var fsex = window.document.getElementsByName('radsex')/*Acessei o elementos por name porque os elementos são radios e tem o mesmo nome*/
          var idade = ano - Number(anoNasci.value)
         
          var genero = ''

          var img = document.createElement('img') /*É a mesma coisa que criar a tag img pelo html*/
          img.setAttribute('id','foto')  /*Inseri o atributo id em imagem com o valor no atributo de foto*/

          if(fsex[0].checked){ /*.checked significa marcado ou checado, ou seja, se o que estiver marca/checado for a posição 0 então é masculino*/
               genero = 'Homem'  
               if(idade >= 0 && idade < 10){ //CRIANÇA
                    img.setAttribute('src','imagens/nenemHomem1.png')                    
               }else if(idade >= 10 && idade < 21){//JOVEM
                    img.setAttribute('src','imagens/jovemHomem1.png')
               }else if(idade >= 21 && idade < 50){//ADULTO
                    img.setAttribute('src','imagens/adultoHomem1.png')
               }else{//IDOSO
                    img.setAttribute('src','imagens/idosoHomem1.png')
               }
          }else if(fsex[1].checked){
               genero = 'Mulher'
               if(idade >= 0 && idade < 10){ //CRIANÇA
                    img.setAttribute('src','imagens/nenemMulher1.png')                    
               }else if(idade >= 10 && idade < 21){//JOVEM
                    img.setAttribute('src','imagens/jovemMulher1.png')
               }else if(idade >= 21 && idade < 50){//ADULTO
                    img.setAttribute('src','imagens/adultaMulher1.png')
               }else{//IDOSO
                    img.setAttribute('src','imagens/idosaMulher1.png')
               }
          }
         res.style.textalign = 'center'
          res.innerHTML = `Detectamos ${genero} com ${idade} anos<br>`
          res.appendChild(img) /*appendChild(elemento desejado) significa adicionar um conteúdo na página web*/
          
          
     }

}