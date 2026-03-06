import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../helpers/http-service';

@Component({
  selector: 'app-dj-request-add',
  imports: [ReactiveFormsModule],
  templateUrl: './dj-request-add.html',
  styleUrl: './dj-request-add.css',
})
export class DjRequestAdd {

  constructor(private router: Router,
    private http: HttpService
  ) {}

    addRequestForm = new FormGroup({
    requester: new FormControl('', Validators.required),
    artist: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    message: new FormControl()
  });

  addRequest(): void {
    if (this.addRequestForm.status == 'VALID')
      this.http.post('/requests/', this.addRequestForm.value).subscribe(resp => {
        this.router.navigateByUrl('/dj/requests');
    });
  }

}
