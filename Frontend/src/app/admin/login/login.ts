import { Component } from '@angular/core';
import { HttpService } from '../../helpers/http-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private http: HttpService,
    private router: Router
  ) {}

  login(): void {
    this.http.post('/token/', this.loginForm.value).subscribe({
      next: (resp) => {
        const body:any = resp.body;
        localStorage.setItem('token', body.access);
        this.router.navigateByUrl('/admin/dashboard');
      },
      error: (err) => {
        if (environment.debug)
          console.log(err);
      }
    });
  }

}
