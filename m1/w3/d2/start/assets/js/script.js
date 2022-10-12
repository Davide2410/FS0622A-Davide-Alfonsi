// 1 ESERCIZIO
function print(apples, oranges){
    let succo = `Succo con ${apples} mele e ${oranges} arance`;
    return succo;    
}
document.getElementById('corretta').innerHTML = print(4, 5);
document.getElementById('sbagliata').innerHTML = print(4);  


// 2 ESERCIZIO
function ages(anno , corrent){   
    let age = corrent - anno;
    document.getElementById('eta').innerHTML += ` ${age}`;
}
ages(2000, 2022);

// 3 ESERCIZIO
people = (age1, age2) => {
    document.getElementById('persona1').innerHTML += `L'anno di nascita di Anna è ${2022 - age1}`;
    document.getElementById('persona2').innerHTML += `L'anno di nascita di Maria è ${2022 - age2}`;
}
people(30,24);

// 4 ESERCIZIO
function cake(mele , arance){
    function slices(){
        document.getElementById('torta').innerHTML = `Torta con ${mele} fette di mele e ${arance} fette di arancia.`;
    }
    slices();
}
cake(9,15);

// ESERCIZIO 5
let btnCalc = document.getElementById('calcola');

btnCalc.addEventListener('click' , function() {
let cibo = document.getElementById('cibo').value;
let detersivi = document.getElementById('detersivi').value;
let abiti = document.getElementById('abiti').value;

let sum = Number(cibo) + Number(detersivi) + Number(abiti);

document.getElementById('totale').innerHTML += sum;
     
});