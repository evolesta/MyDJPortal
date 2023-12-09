import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {

  addClientForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address1: new FormControl(),
    postal_code: new FormControl(),
    city: new FormControl(),
    contacts: new FormGroup({
      first_name: new FormControl(),
      last_name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl()
    })
  });

  constructor(private http: HttpClientService,
    private router: Router) {}

  addClient(): void {
    this.http.post('/ininja/clients/', this.addClientForm.value).subscribe(resp => {
      this.router.navigateByUrl('/admin/dashboard/clients');
    });
  }

}
