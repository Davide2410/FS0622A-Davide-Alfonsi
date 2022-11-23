"use strict";
var array = [];
class Capo {
    constructor(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivainclusa, _prezzoivaesclusa, _disponibile, _saldo) {
        this.id = _id;
        this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    // METODI
    getsaldocapo() {
        return this.prezzoivainclusa * this.saldo / 100;
    }
    getAcquistocapo() {
        return this.prezzoivainclusa - this.getsaldocapo();
    }
}
function getDati() {
    fetch('http://localhost:3000/capi').then((response) => {
        return response.json();
    }).then((data) => {
        array = data;
        data.forEach((element) => {
            let capo = new Capo(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
            console.log(data);
            console.log(capo);
            console.log(capo.getAcquistocapo().toFixed(2));
        });
    });
}
getDati();
