var saluto = "Sto imparando JavaScript";

let upper = document.getElementById('maiuscola');
function upperCase(saluto){
    var maiuscolo = saluto.toUpperCase();
    upper.innerHTML += maiuscolo;
};
upperCase(saluto);


let lower = document.getElementById('minuscola');
function lowerCase(saluto){
    var minuscolo = saluto.toLowerCase();
    lower.innerHTML += minuscolo;
};
lowerCase(saluto);

let letter = document.getElementById('strArray');
function letterString(saluto){
    var string = saluto.split("");
    letter.innerHTML += string;
}
letterString(saluto);

let chart = document.getElementById('estraiCaratteri');
function chartString(saluto){
    var letter1 = saluto.charAt(2);
    var letter2 = saluto.charAt(1);
    var letter3 = saluto.charAt(14);
    var letter4 = saluto.charAt(0);

    var carattere = letter1 + letter2 + letter3 + letter4;

    chart.innerHTML += carattere;
}
chartString(saluto);

let conc = document.getElementById('concatena');
function concatena(saluto){
    saluto = "Sto imparando JavaScript".concat(" JS");
    conc.innerHTML += saluto;
}
concatena(saluto);


let estract = document.getElementById('estraiStringa');
function estractString(saluto) {
    var pos = saluto.slice(5 , 9);
    estract.innerHTML = pos;
}
estractString(saluto);

// -------------------------------------------------------------
var persone = ["Lorenzo" , "Francesco", "Davide", "Ele"];

let array = document.getElementById('array');
function print(persone) {
    array.innerHTML += persone; 
}
print(persone);


let length = document.getElementById('lunghezza');
function printLength(persone) {
    length.innerHTML += persone.length;
}
printLength(persone);

let element = document.getElementById('elemento');
function printElement(persone) {
    element.innerHTML += persone[2];
}
printElement(persone);

let last = document.getElementById('ultimo');
function printLast(persone) {
    last.innerHTML += persone[persone.length-1];
    // last.innerHTML += persone[3];
}
printLast(persone);

let newPeople = document.getElementById('modificato');
function addPeople(persone) {
    persone.splice(2,1 , "Noemi");
    newPeople.innerHTML += persone.toString();
}
addPeople(persone);

// -------------------------------------------------------------

var people = [
    {"nome": "Mario" , "year" : "2001"},
    {"nome": "Anna" , "year" : "1990"},
    {"nome": "Maria" , "year" : "1993"},
    {"nome": "Nicola" , "year" : "2018"},
    {"nome": "Giovanni" , "year" : "2010"},
];

let yeraCorrent = 2022;

function marioAge(people) {
   var age1 = document.getElementById('eta1');

   age1.innerHTML += yeraCorrent - people[0].year;
};
marioAge(people);

function annaAge(people) {
    var age2 = document.getElementById('eta2');
 
    age2.innerHTML += yeraCorrent - people[1].year;
 };
 annaAge(people);

 function mariaAge(people) {
    var age3 = document.getElementById('eta3');
 
    age3.innerHTML += yeraCorrent - people[2].year;
 };
 mariaAge(people);

 function nicolaAge(people) {
    var age4 = document.getElementById('eta4');
 
    age4.innerHTML += yeraCorrent - people[3].year;
 };
 nicolaAge(people);

 function giovannaAge(people) {
    var age5 = document.getElementById('eta5');
 
    age5.innerHTML += yeraCorrent - people[4].year;
 };
 giovannaAge(people);


// function agePeople(people){
//    var array1 = new Array(age1 , age2, age3, age4, age5);
//    var arrayEta = document.getElementById('arrayEta');

//    arrayEta.innerHTML += array1;
   
// }

// agePeople(people);

// ------------------------------------------------------------------------

var animals = ["coniglio" , "cane" , "gatto", "criceto"];

function printAnimal(animals) { 
    var intero = document.getElementById('intero');
    intero.innerHTML += animals;
}
printAnimal(animals);

function addAnimal(animals) { 
    var add = document.getElementById('aggiunto');
    animals.push('leone');
    add.innerHTML += animals.toString();
}
addAnimal(animals);

function deleteAnimal(animals) {
   var estrai = document.getElementById('estratto');
   animals.pop("");
   estrai.innerHTML += animals;
}
deleteAnimal(animals);


function vero(animals){
   var verita = animals.includes("criceto");
   document.getElementById('verifica1').innerHTML += verita;
};
vero(animals);

function falso(animals){
    var falso = animals.includes("leone");
    document.getElementById('verifica2').innerHTML += falso;
 };
 falso(animals);
