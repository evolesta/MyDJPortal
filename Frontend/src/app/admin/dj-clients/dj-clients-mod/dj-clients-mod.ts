import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../helpers/http-service';

@Component({
  selector: 'app-dj-clients-mod',
  imports: [ReactiveFormsModule],
  templateUrl: './dj-clients-mod.html',
  styleUrl: './dj-clients-mod.css',
})
export class DjClientsMod implements OnInit {

  modClientForm = new FormGroup({
    name: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl(),
    postalCode: new FormControl(),
    city: new FormControl(),
    email: new FormControl(),
    phone: new FormControl()
  });

  edit: boolean = false;
  id: number = 0;

  constructor(private http: HttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // get the client when in edit route
    if (this.router.url.includes('/edit')) {
      // Set edit mode
      this.edit = true;
      this.id = history.state.id;
      this.getClient(history.state.id);
    }
  }

  getClient(id: any): void {
    this.http.get('/clients/' + id + '/').subscribe({
      next: (resp) => {
        const body:any = resp.body;
        this.modClientForm.patchValue(body);
      }
    })
  }

  modClient(): void {
    // NEW or MOD a client
    if (this.edit)
      this.http.put('/clients/' + this.id + '/', this.modClientForm.value).subscribe({
        next: (resp) => {
          this.router.navigateByUrl('dj/clients');
        }
      });
    else
      this.http.post('/clients/', this.modClientForm.value).subscribe({
    next: (resp) => {
        this.router.navigateByUrl('dj/clients');
    }
    });
  }

}
