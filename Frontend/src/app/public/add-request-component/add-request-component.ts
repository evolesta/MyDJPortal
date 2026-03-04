import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../helpers/http-service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-request-component',
  imports: [ReactiveFormsModule],
  templateUrl: './add-request-component.html',
  styleUrl: './add-request-component.css',
})
export class AddRequestComponent implements OnInit {

  addRequestForm = new FormGroup({
    requester: new FormControl('', Validators.required),
    artist: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    message: new FormControl()
  });

  // global vars
  gigId = 0;

  constructor(private http: HttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRequestSettings();
  }

  getRequestSettings(): void {
    this.http.get('/requestSettings/').subscribe({
      next: (resp) => {
        const body:any = resp.body;

        // check active
        if (!body.active) {
          this.router.navigateByUrl('/');
        }
      }
    });
  }

  addRequest(): void {
    if (this.addRequestForm.status == 'VALID')
      this.http.post('/requests/', this.addRequestForm.value).subscribe(resp => {
        this.router.navigateByUrl('/');
    });
  }

}
