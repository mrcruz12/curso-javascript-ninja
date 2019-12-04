# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function (valor){
    return valor ? true : false;
}

var isTruthy = function (valor){
    return !!valor;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy = functionIsTruthy(`falsy`);
isTruthy(false)
isTruthy(null)
isTruthy(0)
isTruthy(undefined)
isTruthy('')
isTruthy(NaN)

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(true)
isTruthy(1)
isTruthy('string')
isTruthy([])
isTruthy({})
isTruthy(function(){})

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca:'GM - Chevrolet',
    modelo: 'Corsa',
    placa: 'FHF-1234',
    ano: 2012,
    cor: 'prata',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
function mudarCor(cor){
    carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obtercor = function(){
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){
    return `Esse carro é um ${carro.marca} ${carro.modelo}`;
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionarPessoas = function (quantidade){
   if(quantidade > (carro.assentos - carro.quantidadePessoas)){
        return (carro.assentos - carro.quantidadePessoas > 1) ? `Só cabem mais ${carro.assentos - carro.quantidadePessoas} pessoas!`: `Só cabem mais ${carro.assentos - carro.quantidadePessoas} pessoa!`;
    }else{
        carro.quantidadePessoas += quantidade
        
    }
     if(carro.assentos == carro.quantidadePessoas ){
        return 'O carro já está lotado!';
    }
    return `Já temos ${carro.assentos} pessoas no carro!`
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obtercor()
//prata

// Mude a cor do carro para vermelho.
carro.mudarCor("vermelho")

// E agora, qual a cor do carro?
carro.obtercor()
//vermelho

// Mude a cor do carro para verde musgo.
carro.mudarCor("verde musgo")

// E agora, qual a cor do carro?
carro.obtercor()
//verde musgo

// Qual a marca e modelo do carro?
carro.obterMarcaModelo()

// Adicione 2 pessoas no carro.
carro.adicionarPessoas(2)
//Ja temos 2 pessoas no carro

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(4)
//Só cabem mais 3 pessoas!

// Faça o carro encher.
carro.adicionarPessoas(3)
//Ja temos 5 pessoas no carro

// Tire 4 pessoas do carro.
carro.removerPessoas = (quantidade) => {
    if(quantidade > carro.quantidadePessoas){
        return "A quantidade de pessoas para sair deve ser menor do que a quantidade de pessoas no carro"
    }else{
         carro.quantidadePessoas - quantidade
         return `No carro tem ${carro.quantidadePessoas} pessoas`   
    }
}
carro.removerPessoas(4)
//No carro tem 1 pessoas

// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10)
//Só cabem 4 pessoas

// Quantas pessoas temos no carro?
carro.quantidadePessoas
```
