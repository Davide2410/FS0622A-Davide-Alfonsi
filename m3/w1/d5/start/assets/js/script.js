"use strict";
// CONTENITORE DELLE ICONE
var containerIcon = document.querySelector('.container-icon');
var btnMessage = document.getElementById('btnMessage');
var btnChiamate = document.getElementById('btnChiamate');
// BOTTONE PER HOME TELEFONO
var btnClose = document.getElementById('btnClose');
// CONTAINER SCHERMATA CHIAMATE
var cronologiaChiamate = document.querySelector('.container-chiamate');
var chiamaContatto = document.getElementById('chiamaContatto');
var numeroCell = document.getElementById('numeroCell');
// CONTAINER SCHERMATA CHIAMATA
var containerChiamata = document.querySelector('.container-chiamata');
var nomeChiamata = document.getElementById('nomeChiamata');
var numeroChiamata = document.getElementById('numeroChiamata');
var attacca = document.getElementById('attacca');
var profiloUtente = document.querySelector('.profilo-utente');
var timer = document.querySelector('.timer');
var interval;
// CONTAINER SCHERMATA CREDITO
var containerMessage = document.querySelector('.container-messaggio');
var scriviContatto = document.getElementById('scriviContatto');
var effetuaRicarica = document.getElementById('effetuaRicarica');
// CONTAINER SCHERMATA MESSAGGIO A CREDITO
var containerCredito = document.querySelector('.container-credito');
var btnIndietro = document.getElementById('btnIndietro');
var btnIndietro2 = document.getElementById('btnIndietro2');
var creditoResiduo = document.getElementById('creditoResiduo');
var messageCredito = document.getElementById('messageCredito');
var btnInvio = document.getElementById('inviaMessage');
var messageDefault = document.querySelector('.message');
class User {
    constructor(_nome, _numero, _credito, _numeroChiamata) {
        this.nome = _nome;
        this.numero = _numero;
        this.credito = _credito;
        this.numeroChimate = _numeroChiamata;
    }
    ricarica(n) {
        this.credito += n;
    }
    chiamata(minuti) {
        this.credito -= minuti * 0.20;
        this.numeroChimate++;
    }
    numero404() {
        return this.credito;
    }
    getNumeroChimate() {
        return this.numeroChimate;
    }
    azzeraChiamate() {
        this.numeroChimate = 0;
    }
}
let davide = new User("Davide", 3315015433, 0, 0);
// davide.chiamata(1);
// davide.azzeraChiamate();
console.log('---------------');
let lorenzo = new User("Lorenzo", 3335015433, 0, 0);
lorenzo.ricarica(20);
lorenzo.chiamata(1);
console.log(lorenzo.numero404());
console.log(lorenzo.getNumeroChimate());
// lorenzo.azzeraChiamate();
console.log('---------------');
let luca = new User("Luca", 3395015433, 0, 0);
luca.ricarica(30);
luca.chiamata(1);
console.log(luca.numero404());
console.log(luca.getNumeroChimate());
// luca.azzeraChiamate();
// BOTTONE CENTRALE CHIUDI APP CHIAMATE
function home() {
    btnClose.addEventListener('click', function () {
        cronologiaChiamate.classList.add('d-none');
        containerChiamata.classList.add('d-none');
        containerIcon.classList.remove('d-none');
        containerMessage.classList.add('d-none');
        containerCredito.classList.add('d-none');
    });
}
chiamaContatto.addEventListener('click', function () {
    clearInterval(interval);
    davide.chiamata(1);
    // console.log(davide.getNumeroChimate());
    timer.innerHTML = "Chiamata in corso...";
    cronologiaChiamate.classList.add('d-none');
    containerChiamata.classList.remove('d-none');
    nomeChiamata.innerText = `${luca.nome}`;
    numeroChiamata.innerText = `${luca.numero}`;
    tempo();
    home();
    endChiamata();
});
function endChiamata() {
    attacca.addEventListener('click', function () {
        clearInterval(interval);
        timer.innerHTML = "Chiamata terminata";
    });
}
function tempo() {
    var secondi = 0;
    var minuti = 0;
    interval = setInterval(function () {
        timer.innerHTML = minuti + ":" + secondi;
        secondi++;
        if (secondi == 60) {
            minuti++;
            secondi = 0;
        }
    }, 1000);
}
btnChiamate.addEventListener('click', function () {
    containerIcon.classList.add('d-none');
    cronologiaChiamate.classList.remove('d-none');
    chiamaContatto.innerText = `${luca.nome}`;
    numeroCell.innerText = `${luca.numero}`;
    home();
});
// ---------------------------------------------------------------
scriviContatto === null || scriviContatto === void 0 ? void 0 : scriviContatto.addEventListener('click', function () {
    containerCredito === null || containerCredito === void 0 ? void 0 : containerCredito.classList.remove('d-none');
    containerMessage === null || containerMessage === void 0 ? void 0 : containerMessage.classList.add('d-none');
    btnInvio.addEventListener('click', function () {
        if (messageCredito.value == "Credito") {
            creditoResiduo.innerHTML = `Ciao ${davide.nome}, Il tuo credito residuo è di ${davide.numero404()} €.`;
            messageDefault === null || messageDefault === void 0 ? void 0 : messageDefault.classList.remove('d-none');
            messageCredito.value = '';
        }
        else if (messageCredito.value == "Chiamate") {
            creditoResiduo.innerHTML = `Ciao ${davide.nome}, hai effetuato ${davide.getNumeroChimate()} chiamate. `;
            messageDefault === null || messageDefault === void 0 ? void 0 : messageDefault.classList.remove('d-none');
            messageCredito.value = '';
        }
        else if (messageCredito.value == "Ricarica") {
            creditoResiduo.innerHTML = `Ciao ${davide.nome}, hai effetuato 10€ di ricarica.`;
            davide.ricarica(10);
            messageDefault === null || messageDefault === void 0 ? void 0 : messageDefault.classList.remove('d-none');
            messageCredito.value = '';
        }
        else if (messageCredito.value == "") {
            messageCredito.value = '';
        }
        else {
            messageDefault === null || messageDefault === void 0 ? void 0 : messageDefault.classList.remove('d-none');
            creditoResiduo.innerHTML = "Prova a scrivermi Credito,  Chiamate o Ricarica";
            messageCredito.value = '';
        }
    });
    btnIndietro === null || btnIndietro === void 0 ? void 0 : btnIndietro.addEventListener('click', function () {
        containerCredito === null || containerCredito === void 0 ? void 0 : containerCredito.classList.add('d-none');
        containerMessage === null || containerMessage === void 0 ? void 0 : containerMessage.classList.remove('d-none');
    });
});
btnMessage === null || btnMessage === void 0 ? void 0 : btnMessage.addEventListener('click', function () {
    containerIcon === null || containerIcon === void 0 ? void 0 : containerIcon.classList.add('d-none');
    containerMessage === null || containerMessage === void 0 ? void 0 : containerMessage.classList.remove('d-none');
    btnIndietro === null || btnIndietro === void 0 ? void 0 : btnIndietro.addEventListener('click', function () {
        containerMessage === null || containerMessage === void 0 ? void 0 : containerMessage.classList.add('d-none');
        containerIcon === null || containerIcon === void 0 ? void 0 : containerIcon.classList.remove('d-none');
    });
    home();
});
