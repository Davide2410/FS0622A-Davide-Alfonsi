let corretta = document.getElementById('corretta');
let sbagliata = document.getElementById('sbagliata');
let eta = document.getElementById('eta');
let anna = document.getElementById('persona1');
let maria = document.getElementById('persona2');
let torta = document.getElementById('torta');



let btnCalc = document.getElementById('calcola');
let totale = document.getElementById('totale');

// 1 ESERCIZIO
function print(apples, oranges){
    corretta.innerHTML = `Succo con ${apples} mele e ${oranges} arance`;
    function print2(apples , oranges){
        sbagliata.innerHTML = `Succo con ${apples} mele e ${oranges} arance`
    }
    print2(4);
}
print(4,5);

// 2 ESERCIZIO
function ages(anno , corrent){   
    let age = corrent - anno;
    eta.innerHTML += ` ${age}`;
}
ages(2000, 2022);

// 3 ESERCIZIO
people = (age1, age2) => {
    anna.innerHTML += `L'anno di nascita di Anna è ${2022 - age1}`;
    maria.innerHTML += `L'anno di nascita di Maria è ${2022 - age2}`;
}
people(30,24);

// 4 ESERCIZIO
function cake(mele , arance){
    function slices(){
        torta.innerHTML = `Torta con ${mele} fette di mele e ${arance} fette di arancia.`;
    }
    slices();
}
cake(9,15);

// ESERCIZIO 5

btnCalc.addEventListener('click' , function() {

let cibo = document.getElementById('cibo').value;
let detersivi = document.getElementById('detersivi').value;
let abiti = document.getElementById('abiti').value;

let sum = Number(cibo) + Number(detersivi) + Number(abiti);

totale.innerHTML += sum;
     
});