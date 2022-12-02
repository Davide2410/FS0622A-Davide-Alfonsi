import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { UserDettaglioComponent } from '../user-dettaglio/user-dettaglio.component';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userSRV: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers() {
    this.users = this.userSRV.allUser()
  }
  paginaDettaglio(id: number) {
    this.userSRV.dettaglioUser(id);
  }
}
