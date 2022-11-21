// class Account {
//     nome: string;
//     conto: number;
//     constructor(_nome: string, _conto: number) {
//         this.nome = _nome;
//         this.conto = _conto;
//     }
//     // DEPOSITO
//     oneDeposit(): number {
//         let deposito: number = 20000;
//         this.conto = deposito;
//         return this.conto;
//     }
//     // PRELIEVO
//     oneWithDraw(): number {
//         let prelievo: number = Math.floor(Math.random() * (1000 - 1) + 1);
//         let contoFinale: number = this.oneDeposit() - prelievo;
//         return contoFinale;
//     }
// }



// class Mother extends Account {
//     interesse: number;
//     constructor(_nome: string, _conto: number, _interesse: number) {
//         super(_nome, _conto);
//         this.interesse = _interesse;
//     }
//     // DEPOSITO
//     oneDeposit(): number {
//         let deposito: number = 20000;
//         this.conto = deposito;
//         let versamentoInteresse:number = this.conto / 100 * this.interesse;
//         this.conto = this.conto - versamentoInteresse
//         return this.conto;
//     }
//     // PRELIEVO
//     oneWithDraw(): number {
//         let prelievo: number = 1000;
//         let prelievoInteresse: number = prelievo / 100 * this.interesse;
//         prelievo = prelievo + prelievoInteresse;

//         let saldoFinale = this.oneDeposit() - prelievo;
//         return saldoFinale
//     }
// }
// var madre = new Mother('Linda', 0, 10);

// // MADRE
// console.log(`Il conto di ${madre.nome} è di ${madre.oneDeposit()}€`);
// console.log(`${madre.nome} ha effettutato un prelievo ora il suo conto è ${madre.oneWithDraw()}€`);


// class Figlio extends Account {
//     constructor(_nome: string, _conto: number) {
//         super(_nome, _conto);
//     }
// }
// var figlio = new Figlio('Davide', 0);
// // FIGLIO
// console.log(`Il conto di ${figlio.nome} è di ${figlio.oneDeposit()}€`);
// console.log(`${figlio.nome} ha effettutato un prelievo ora il suo conto è ${figlio.oneWithDraw()}€`);


class Mother {
    nome: string;
    conto: number;
    interesse: number;

    constructor(_nome: string, _conto: number, _interesse: number) {
        this.nome = _nome;
        this.conto = _conto;
        this.interesse = _interesse;
    }
    // VERSAMENTO
    oneDeposit(): number {
        let versamento = 20000;
        this.conto = versamento - this.addInterest(versamento);
        return this.conto;
    }
    // PRELIEVO
    oneWithDraw(): number {
        let prelievo: number = 1000;
        prelievo = prelievo + this.addInterest(prelievo);
        let saldoFinale = this.oneDeposit() - prelievo;
        return saldoFinale
    }

    addInterest(valore: number) {
        return valore = valore / 100 * this.interesse;
    }
}

var madre = new Mother('Linda', 0, 10);

// MADRE
console.log(`Il conto di ${madre.nome} è di ${madre.oneDeposit()}€`);
console.log(`${madre.nome} ha effettutato un prelievo ora il suo conto è ${madre.oneWithDraw()}€`);


class Figlio extends Mother {
    constructor(_nome: string, _conto: number, _interesse: number) {
        super(_nome, _conto, _interesse)
    }

}
var figlio = new Figlio('Davide', 0, 0);
// FIGLIO
console.log(`Il conto di ${figlio.nome} è di ${figlio.oneDeposit()}€`);
console.log(`${figlio.nome} ha effettutato un prelievo ora il suo conto è ${figlio.oneWithDraw()}€`);