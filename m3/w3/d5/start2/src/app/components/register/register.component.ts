import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { RegisterRequest } from '../../auth/auth-response.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  err: string | undefined

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {

    let data: RegisterRequest = {
      email: form.value.email,
      password: form.value.password,
      name: form.value.name
    }

    this.authSrv.register(data).pipe(catchError(err => {
      if (err.error == "Email format is invalid") {
        this.err = `Formato email errato`
      } else if (err.error == "Email already exists") {
        this.err = `Email già esistente`
      }
      throw err
    })).subscribe(res => {
      this.err = undefined
      this.router.navigate(['/login'])
    })

  }

}
