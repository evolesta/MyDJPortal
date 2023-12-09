import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit {

  locationId: string;

  editLocationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl(),
    postalCode: new FormControl(),
    city: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    contactName: new FormControl()
  });

  constructor(private http: HttpClientService,
    private router: Router,
    private route: ActivatedRoute) {}

    ngOnInit(): void {
      this.locationId = this.route.snapshot.paramMap.get('id');
      this.getLocation();
    }

    getLocation(): void {
      this.http.get('/locations/' + this.locationId + '/').subscribe(resp => {
        const response:any = resp.body;
        this.editLocationForm.patchValue(response);
      });
    }

    editLocation(): void {
      this.http.put('/locations/' + this.locationId + '/', this.editLocationForm.value).subscribe(resp => {
        this.router.navigateByUrl('/admin/dashboard/locations');
      });
    }
}
