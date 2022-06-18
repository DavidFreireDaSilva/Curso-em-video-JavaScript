function tabuada(){
     var num = window.document.querySelector('#txtn')
     var tab = window.document.querySelector('#seltab')

     if(num.value.length == 0){
          window.alert('Erro! Por favor, digite um número!')
     }else{
          var n = Number(num.value)
          var c = 1
          tab.innerHTML = '' /*tab vazia para que limpe o elemento para receber o próximo dado*/
          while(c <= 10){
               var item = window.document.createElement('option')/*Criando o elemento option do select através do js, porque dentro do select tem que ter o elemento option*/
               item.text = `${n} x ${c} = ${n*c}` /*.text para colocar o dado dentro do option*/
               item.value = `tab${c}`/*.value nesse caso é para inserir um dado dentro de um atributo value no option, geralmente serve para quando usar php, serve para "identificar" os options*/
               tab.appendChild(item)/*.appendClid, ou seja, adicione um elemento filho dentro de tab, que nesse caso é o item*/ 
               c++    
          }
     }
}