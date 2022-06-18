function carregar(){
var msg = window.document.querySelector('#msg')
var img = window.document.querySelector('#imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 0  && hora < 12){
    //BOM DIA
    img.src = 'imagens/manha.png'  //vai inserir essa imagem diretamente no elemento que foi inserido na variável img
    document.body.style.background = '#e2cd9f' //vai acessar o body e trocar a cor de fundo 
}else if(hora >= 12 && hora < 18){
     //BOA TARDE
     img.src = 'imagens/tarde.png'
     document.body.style.background = '#b9846f'
}else{
     //BOA NOITE
     img.src = 'imagens/noite.png'
     document.body.style.background = '#515154'
}
}