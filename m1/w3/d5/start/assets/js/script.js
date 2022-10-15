//FUNZIONE DIGITA
function digita(valore){ 
    document.getElementById("display").value += valore;
}
//FUNZIONE OPERAZIONE
function operazione() { 
    document.getElementById("display").value = eval(document.getElementById("display").value); 
}
// FUNZIONE RESET
function reset() { 
  document.getElementById("display").value = ''; 
}
// FUNZIONE CANCELLA ULTIMO VALORE
function cancella(){
    var rimuovi = document.getElementById("display").value;
    document.getElementById("display").value = rimuovi.substring(0 ,rimuovi.length-1);
} 
// ---------------------------

let contApp = document.getElementById('cont_btn');
let btnApp = document.getElementById('app');
let contCalc = document.getElementById('cont_calc');
let close = document.getElementById('close');

function eventHandler(){
    hidden();
    openApp();
    closeApp();
}
eventHandler();

function hidden(){
    contCalc.style.display = 'none';
}
function openApp(){
    contApp.style.display ='none';
    contCalc.style.display = 'block';
};
function closeApp(){
    contCalc.style.display = 'none';
    contApp.style.display ='flex';
}

// CAMBIA COLORE ALLA COVER
let cover = document.getElementById('phone');
let btnRed = document.querySelector('.red');
btnRed.addEventListener('click', ()=>{
    cover.style.outlineColor = '#ff0000';
});
let btnGreen = document.querySelector('.green');
btnGreen.addEventListener('click', ()=>{
    cover.style.outlineColor = '#3a9c59';
});
let btnPurple = document.querySelector('.purple');
btnPurple.addEventListener('click', ()=>{
    cover.style.outlineColor = '#9c3a75';
});
let btnReset = document.querySelector('.reset');
btnReset.addEventListener('click', ()=>{
    cover.style.outlineColor = '#6b6b3b';
});
let contColor = document.querySelector('.change_cover');
function hiddenColor(){
    contColor.style.display = 'none';   
}
hiddenColor();

// EVENT AL CLICK COMPARI SPARISCI
let spin = document.getElementById('spin');
spin.addEventListener('click' , ()=>{
    contColor.style.display = 'flex'; 
    spin.style.display = 'none';  
});
let closeColor = document.getElementById('close_color');
closeColor.addEventListener('click' , ()=>{
    contColor.style.display = 'none';
    spin.style.display = 'block';  
});