class Persona {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    ConfrontaEta(x) {
        if (this.age > x.age) {
            console.log(this.name + " è più vecchio di " + x.name);
        } else {
            console.log(x.name + " è più vecchio di " + this.name);
        }
    }
}

var p1 = new Persona('Mario', 21);
var p2 = new Persona('Simone', 18);
var p3 = new Persona('Giulia', 30);

p1.ConfrontaEta(p2);
p1.ConfrontaEta(p3);
p2.ConfrontaEta(p3);


// ----------------------------------------------

const users = [
    { id: 1, nome: 'Luca', cognome: 'Rossi', classe: 'A' },
    { id: 2, nome: 'Luigi', cognome: 'Verdi', classe: 'A' },
    { id: 3, nome: 'Mario', cognome: 'Bianchi', classe: 'A' },
    { id: 4, nome: 'Piero', cognome: 'Neri', classe: 'A' },
    { id: 5, nome: 'Paolo', cognome: 'Rossi', classe: 'A' },
    { id: 6, nome: 'Sergio', cognome: 'Verdi', classe: 'A' },
    { id: 7, nome: 'Gianni', cognome: 'Bianchi', classe: 'A' },
    { id: 8, nome: 'Davide', cognome: 'Neri', classe: 'A' },
];

let nomi = document.getElementById('nomi');

users.forEach(user => {

    let riga1 = ` <td> ${user.id} </td> `;
    let riga2 = ` <td> ${user.nome} </td> `;
    let riga3 = ` <td> ${user.cognome} </td> `;
    let riga4 = ` <td> ${user.classe} </td> `;

    nomi.innerHTML += ` ${riga1} ${riga2} ${riga3} ${riga4}`;
});

// class Users{
//     constructor(_items , _pageSize){
//         this.items = _items;
//         this.pageSize = _pageSize;
//     }
// }