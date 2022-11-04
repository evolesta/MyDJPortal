import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public errors:any;

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private http: HttpService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.http.post("/token", this.loginForm.value).subscribe(resp => {
      const response:any = resp.body;
      localStorage.setItem('token', response.token);
      this.router.navigateByUrl('/dj/dashboard');
    }, error => {
      this.errors = "Ongeldige inloggegevens.";
    });
  }

}
