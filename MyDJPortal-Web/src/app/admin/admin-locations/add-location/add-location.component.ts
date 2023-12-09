import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent {
  
  addLocationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl(),
    postalCode: new FormControl(),
    city: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    contactName: new FormControl()
  });

  constructor(private http: HttpClientService,
    private router: Router) {}

  addLocation(): void {
    this.http.post('/locations/', this.addLocationForm.value).subscribe(resp => {
      this.router.navigateByUrl('/admin/dashboard/locations');
    });
  }
}
