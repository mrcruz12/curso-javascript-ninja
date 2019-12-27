(function () {
    'use strict'
    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    */

    /*
    Em todos os exercícios desse desafio, nós vamos utilizar expressões
    regulares! Para isso, iremos usar o texto abaixo. Coloque-o em uma
    variável chamada `text`:
    "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro."
    */
    var text = 'Manuel Marques de Sousa, Conde de Porto Alegre '
    + '(Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de '+
    '"O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.'

    /*
    Vamos começar com umas brincadeiras fáceis :D
    Troque o nome "Manuel Marques de Sousa" pelo seu nome, e mostre o resultado
    no console:
    */
    console.log('Adicionando seu nome no texto:');
    console.log(text.replace(/Manuel Marques de Sousa/g, 'Matheus Rodrigues da Cruz'))

    /*
    Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
    console.
    Ex: Se você for da São Paulo, substitua por "paulista".
    */
    console.log('\nTrocando naturalidade:');
    console.log(text.replace(/brasileiro/g, 'paranaense'))

    /*
    Substitua todos os números por um traço `-`. Cada caractere de número deve
    ser um traço. Mostre o resultado no console:
    */
    console.log('\nTrocando números por -:');
    console.log(text.replace(/\d/g, '-'))


    /*
    Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
    minúsculo por "0" (número zero). Mostre o resultado no console:
    */
    console.log('\nTrocando de "D" a "h" por "0":');
    console.log(text.replace(/[D-Hd-h]/g, '0'))

    /*
    Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
    Mostre o resultado no console:
    */
    console.log('\nTrocando "A" e "a" por "4":');
    console.log(text.replace(/A|a/g, '4'))
    console.log('forma 2')
    console.log(text.replace(/[Aa]/g, '4'))
    console.log('forma 3')
    console.log(text.replace(/a/gi, '4'))
    /*
    Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
    o método `toUpperCase()`. Mostre o resultado no console:
    */
    console.log('\n"O Centauro de Luvas" em caixa alta:');
    console.log(text.replace(/O Centauro de Luvas/, function (phrase) {
        return phrase.toUpperCase()
    }))

    /*
    Agora iremos substituir as datas no formato "13 de junho de 1804" para
    "13/06/1804". A primeira coisa a fazer é criar uma função chamada
    `getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
    retornar o número correspondente a esse mês.
    Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
    Números com menos de dois dígitos devem ter um zero na frente.
    Crie então a função e mostre no console os retornos para os meses de março,
    setembro e dezembro.
    Use um console.log para cada mês, usando a frase:
    "O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
    */
    console.log('\nMeses representados por números:');
    function getMonthNumber(nameMonth){
        var month = {
            janeiro: '01',
            fevereiro: '02',
            'março': '03',
            abril: '04',
            maio: '05',
            junho: '06',
            julho: '07',
            agosto: '08',
            setembro: '09',
            outubro: '10',
            novembro: '11',
            dezembro: '12'
        }
        return month[nameMonth]
    }

    console.log('O mês de março é representado pelo número ' + getMonthNumber('março') + '.')
    console.log('O mês de setembro é representado pelo número ' + getMonthNumber('setembro') + '.')
    console.log('O mês de dezembro é representado pelo número ' + getMonthNumber('dezembro') + '.')
    /*console.log(text.replace(/( de janeiro de )|( de fevereiro de )|( de março de )|( de abril de )|( de maio de )|( de junho de )|( de julho de )|( de agosto de )|( de setembro de )|( de outubro de )|( de novembro de )|( de dezembro de )/g, function () {
        switch (arguments[0]) {
            case ' de janeiro  de':
                console.log('01')
                break;
            case ' de fevereiro de ':
                console.log('02')
                break;
            case ' de março  de':
                console.log('03')
                break;
            case ' de abril  de':
                console.log('04')
                break;
            case ' de maio  de':
                console.log('05')
                break;
            case ' de junho de ':
                return '/06/'
                break;
            case ' de julho de ':
                return '/07/'
                break;
            case ' de agosto de ':
                console.log('08')
                break;
            case ' de setembro de ':
                console.log('09')
                break;
            case ' de outubro de ':
                console.log('10')
                break;
            case ' de novembro de ':
                console.log('11')
                break;
            case ' de dezembro de ':
                console.log('12')
                break;
        }

    }))
    */

    /*
    Agora, declare uma variável chamada `regexDate` que irá receber a expressão
    regular que irá fazer o match com as datas. Crie grupos de captura para o
    dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
    meses que estão no texto, não precisa adicionar todos.
    Com o que vimos até agora, você consegue fazer :D
    Mostre a regex no console.
    */
    console.log('\nRegex que vai fazer o match com as datas do texto:');
    var regexDate = /(\d\d) de (junho|julho) de (\d\d\d\d)/
    console.log(regexDate)

    /*
    Agora crie a função que irá fazer o replace dos dados. A função será chamada
    de `replaceDate`. Ela deve retornar a data no formato:
    "[DIA]/[MÊS]/[ANO]"
    Após criar a função, faça o replace das datas no texto, mostrando no
    console o resultado.
    */
    console.log('\nReplace de datas:');
    function replaceDate(regex, day, month, year){
        return day + '/' + getMonthNumber( month ) + '/' + year;
    }
    console.log( text.replace( regexDate, replaceDate))
}())