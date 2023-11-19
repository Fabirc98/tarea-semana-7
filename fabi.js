'use strict'

function multiplicar(multiplicador,multiplicando) {
    let suma = 0;
    for (let i= 0; i<multiplicador; i++) {
        suma =suma +multiplicando;
    }
    return suma;

} 

let multiplicador= Number (prompt("ingrese numero"));
let multiplicando= Number (prompt("ingrese numero"));

let result = multiplicar( multiplicador,multiplicando);
alert(result);
