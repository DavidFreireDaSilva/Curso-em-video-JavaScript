var num = [5,8,2] /*Array/Vetor*/

num[3] = 6  /*O JS automaticamente cria a posição 3 do array e insere o valor desejado, nesse caso o  valor 6*/
num.push(7) /*Outra forma de inserir um determinado valor na última posição do array é num.push(valor desejado)*/
            
console.log(`Nosso vetor tem os valores ${num}`)
console.log(`Nosso vetor tem ${num.length} elementos`) /*.legth serve para saber quantos elementos tem no array, ou seja, qual o tamanho do array*/
num.sort() /*.sort serve para colocar os valores dos elementos em ordem crescente*/
console.log(`Me mostre o valor do elemento que está na posição 2 do meu vetor: ${num[2]}`)

console.log(`Mostrando os valores do vetor com  estrutur de repetição for:`)
for(var pos = 0; 0 < num.length; pos++){
    console.log(`${num[pos]}`)
}
