import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-dettaglio',
  templateUrl: './user-dettaglio.component.html',
  styleUrls: ['./user-dettaglio.component.scss']
})
export class UserDettaglioComponent implements OnInit {

  user: User[] = [];
  id: number = 0;

  constructor(private userSRV: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let idString = params.get("id");
      this.id = parseFloat(idString!);
      this.userSRV.dettaglioUser(this.id);
      let dettaglio = this.userSRV.getDetails();
      this.user = dettaglio;
      console.log(this.user);
    });
  }
}
