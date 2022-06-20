function parimpar(n){   //Método com parâmetro
    if(n % 2 == 0){
        return 'par'
    }else{
        return 'ímpar'
    }
}
var res = parimpar(5)  //Chamada do método com parâmetro e inserção em variável
console.log(res)


function soma(n1,n2){
    return n1 + n2
}
console.log(soma(7,2))


function soma2(n3=0,n4=0){ /*Significa que se o parâmentro não for passado, vai ser conseiderado o númetro 0*/
    return n3 + n4
}
console.log(soma2(7))



var j = function(x){ /*Também é possíeis colocar uma function dentro de uma variável*/
    return x * 2
}
console.log(j(4))