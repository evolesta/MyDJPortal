import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dj-login',
  templateUrl: './dj-login.component.html',
  styleUrls: ['./dj-login.component.css']
})
export class DjLoginComponent {

  public loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private http: HttpService,
      private snackbar: MatSnackBar,
      private router: Router) { }

  login(): void {
    if (this.loginForm.status === "INVALID") {
      this.snackbar.open("Niet alle velden zijn correct ingevuld!", '', { duration: 4000 });
    }
    else {
      this.http.post("/token", this.loginForm.value).subscribe(resp => {
        const response:any = resp.body;
        localStorage.setItem('token', response.token);
        this.router.navigateByUrl("/dj/dashboard");
      }, error => {
        this.snackbar.open("Ongeldige email of wachtwoord!", '', { duration: 4000 });
      });
    }
  }

}
