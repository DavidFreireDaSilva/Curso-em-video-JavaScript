var valores = [8,6,34,3,235,9]
 /*FORMA ANTIGA DE MOSTRAR OS VALORES DO VETOR*/
console.log(`Mostrando os valores do vetor com a estrutura de repetição for:`)
for(var pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} do meu vetor tem o valor ${valores[pos]}`)
}

 /*FORMA MAIS ATUALIZADA DE MOSTRAR OS VALORES DO VETOR, SÓ FUNCIONA PARA ARRAYS E OBJETOS*/
console.log(`\nMostrando os valores do vetor no formato atualizado da estrutura de repetição for para vetores:`)
for(var posi in valores ){ /*Primeiro a variável de controle(sem dados) e depois vem o nome do array */
    console.log(`A posição ${posi} do meu vetor tem o valor ${valores[posi]}`)
}