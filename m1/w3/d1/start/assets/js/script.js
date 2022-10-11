var nome = 'Aldo';
let stato = 'cliente';
const numero = 3.14;


var concatena = nome + ", " + stato + ", " + numero ;
document.getElementById('concatena').innerHTML = concatena;

var concatena2 = nome + ", " + stato + ", " + numero ;
document.getElementById('concatena2').innerHTML = concatena2;

// PRIMO PUNTO DI 3
var nome1 = 'Mario';
document.getElementById('var').innerHTML= nome1;
{
    let nome1 = 'Carla';
    document.getElementById('let').innerHTML= nome1;
}
document.getElementById('final').innerHTML = nome1;
// SECONDO PUNTO DI 3
var nome2 = 'Mario';
document.getElementById('let2').innerHTML= nome2;
{
    let nome2 = 'Carla';
    document.getElementById('let3').innerHTML= nome2;
}
var nome2 = 'Carla';
document.getElementById('final2').innerHTML = nome2;

// QUARTO ESERCIZO
var value = 15;
document.getElementById('iniziale').innerHTML +=  value;
// addizione
var value1= value + value;
var value2= value1 ++;
document.getElementById('valore1').innerHTML +=  value2 + " , " + value1;
// sottrazione
var value3= value - 10;
var value4= value3--;
document.getElementById('valore2').innerHTML +=  value4 + " , " + value3;
// moltiplicazione
document.getElementById('valore3').innerHTML += value * 3;
// divisione
document.getElementById('valore4').innerHTML +=  value / 3;
// concatenazone
document.getElementById('valore5').innerHTML = `Concatenazione :  ${value} ${(value > 1) ? "è un numero" : "non è un numero"}` ;
