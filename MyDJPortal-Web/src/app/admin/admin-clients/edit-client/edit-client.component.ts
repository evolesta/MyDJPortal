import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  editClientForm = new FormGroup({
    name: new FormControl('', Validators.required),
    number: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    emailAddress: new FormControl(),
    phone: new FormControl(),
    address: new FormControl(),
    postalCode: new FormControl(),
    city: new FormControl()
  });

  clientId: string;

  constructor(private route: ActivatedRoute,
    private http: HttpClientService,
    private router: Router) {}

  ngOnInit(): void {
    // Get the client id
    this.clientId = this.route.snapshot.paramMap.get('id');
    this.getClient();
  }

  getClient(): void {
    this.http.get('/clients/' + this.clientId + '/').subscribe(resp => {
      const response:any = resp.body;
      this.editClientForm.patchValue(response);
    });
  }

  editClient() {
    this.http.put('/clients/' + this.clientId + '/', this.editClientForm.value).subscribe(resp => {
      this.router.navigateByUrl('/admin/dashboard/clients');
    });
  }
}
