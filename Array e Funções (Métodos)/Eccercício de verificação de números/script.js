let num = window.document.querySelector('#fnum')
let lista = window.document.querySelector('#flista')
let res = window.document.querySelector('#res')
let valores = [] //Array vazio

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){ //se o número estiver entre tal valor e se não está na lista
        valores.push(Number(num.value)) //Adicionando o valor na última posição do vetor
        let item = window.document.createElement('option') //Criando o elemnte option
        item.text = `Valor ${num.value} adicionado` //Inserindo um texto em option
        lista.appendChild(item) //Inserindo um elemento filho(nesse caso o option) na lista, que é uma section 
        res.innerHTML = ``
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' //Deixei num vazio 
    num.focus() //Deixei o foco no cursor(mouse) no elemento num, automatizando para não precisar ficar cicando toda hora quando for inserer um elemento lá na página web
}


function finalizar(){
    if(valores.length == 0){    
        window.document.alert('Adicione valores antes de finalizar')   
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){  //Esse for vai varrer todo o vetor
            soma += valores[pos] 
            if(valores[pos] > maior){ maior = valores[pos]}
            if(valores[pos] < menor){menor = valores[pos]}
        }
        media = soma / tot
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

    }
}