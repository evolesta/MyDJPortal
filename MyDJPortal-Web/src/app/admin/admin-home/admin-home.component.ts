import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private http: HttpClientService,
    private router: Router) {}

  login(): void {
    this.http.post('/token/', this.loginForm.value).subscribe(resp => {
      const response:any = resp.body;
      
      localStorage.setItem('accessToken', response.access);
      localStorage.setItem('refreshToken', response.refresh);
      this.router.navigateByUrl('admin/dashboard');
    });
  }
}
