"use strict";
class Lavoro {
    constructor(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
}
class Lavoratori extends Lavoro {
    constructor(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        super(_codredd, _redditoannuolordo, _tasseinps, _tasseirpef);
    }
    getUtileTasse() {
        let utilteTasse = this.redditoannuolordo * this.codredd / 100;
        return utilteTasse;
    }
    getTasseInps() {
        let tasseInps = this.getUtileTasse() * this.tasseinps / 100;
        return tasseInps;
    }
    getTasseIrpef() {
        let taxIrpef = this.getUtileTasse() * this.tasseirpef / 100;
        return taxIrpef;
    }
    getRedditoAnnuoNetto() {
        let redditoLordo = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
        return redditoLordo;
    }
}
var professionista = new Lavoratori(78, 40000, 4, 5);
var artigiano = new Lavoratori(67, 20000, 1, 3);
console.log(`Il professionista ha un utile tasse di ${professionista.getUtileTasse()} , le sue tasse inps sono di ${professionista.getTasseInps()} , le tasse irpef sono ${professionista.getTasseIrpef()} , di conseguenza il tuo reddito netto è ${professionista.getRedditoAnnuoNetto()}`);
console.log(`L'artigiano ha un utile tasse di ${artigiano.getUtileTasse()} , le sue tasse inps sono di ${artigiano.getTasseInps()} , le tasse irpef sono ${artigiano.getTasseIrpef()} , di conseguenza il tuo reddito netto è ${artigiano.getRedditoAnnuoNetto()}`);
