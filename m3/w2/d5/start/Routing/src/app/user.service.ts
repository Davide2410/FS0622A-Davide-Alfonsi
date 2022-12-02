import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      "id": 1,
      "nome": "Davide",
      "cognome": "Alfonsi",
      "email": "davide2000alfonsi@gmail.com",
      "rule": "admin"
    },
    {
      "id": 2,
      "nome": "Lorenzo",
      "cognome": "Alfonsi",
      "email": "lorenzo2000alfonsi@gmail.com",
      "rule": "admin"
    },
    {
      "id": 3,
      "nome": "Luca",
      "cognome": "Alfonsi",
      "email": "luca00alfonsi@gmail.com",
      "rule": "user"
    },
    {
      "id": 4,
      "nome": "Ele",
      "cognome": "Lullo",
      "email": "lullo20ele@gmail.com",
      "rule": "user"
    },
    {
      "id": 5,
      "nome": "Giulio",
      "cognome": "Alfonsi",
      "email": "giulio200alfonsi@gmail.com",
      "rule": "user"
    }
  ];

  user: User[] = [];

  constructor() { }


  allUser() {
    return this.users
  }

  dettaglioUser(id: number) {
    let userDet = this.users.findIndex((user) => {
      return user.id == id;
    })
    this.user = [];
    return this.user.push(this.users[userDet]);
  }

  getDetails() {
    return this.user;
  }
}
