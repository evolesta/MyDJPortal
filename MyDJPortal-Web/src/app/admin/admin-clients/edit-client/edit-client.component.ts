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

  clientId: string;
  client: any;

  constructor(private route: ActivatedRoute,
    private http: HttpClientService,
    private router: Router) {}

  ngOnInit(): void {
    // Get the client id
    this.clientId = this.route.snapshot.paramMap.get('id');
    this.getClient();
  }

  getClient(): void {
    this.http.get('/ininja/clients/' + this.clientId + '/').subscribe(resp => {
      const response:any = resp.body;
      this.client = response.data;
      this.editClientForm.patchValue(response.data);
      this.editClientForm.get('contacts').patchValue(response.data.contacts[0]);
    });
  }

  editClient() {
    this.http.put('/ininja/clients/' + this.clientId + '/', this.editClientForm.value).subscribe(resp => {
      this.router.navigateByUrl('/admin/dashboard/clients');
    });
  }
}
