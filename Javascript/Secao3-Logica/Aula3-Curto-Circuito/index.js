/*
&& -> false && true -> false 'o valor mesmo'
|| -> true && false -> true 'o valor verdadeiro'
*/

/*
FALSY -> qq coisa diferentes desses valores, e avaliado como true pelo javascript
false 
0
'' "" ``
null/undefined
NaN
*/

function falaOi() {
    return 'Oi';
}

const vaiExecutar = 'Lua';

let talvez;

console.log(vaiExecutar && falaOi());
console.log(talvez && falaOi());