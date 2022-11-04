import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { faSave, faAdd } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/http.service';
import { IninjaHttpService } from 'src/app/ininja-http.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent {

  public addClientForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address1: new FormControl('', Validators.required),
    postal_code: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    contacts: new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    })
  });

  public faSave = faSave;
  public faAdd = faAdd;

  public error: string = '';

  //public errors: string = '';

  constructor(public activeModal: NgbActiveModal,
      private http: IninjaHttpService) { }

  addClient(): void {
    // check for form validation
    if (this.addClientForm.status === "INVALID") {
      this.error = 'Niet alle velden zijn correct ingevuld.';
    }
    else if (this.addClientForm.status === 'VALID') {
      this.http.post('/clients', this.addClientForm.value).subscribe(resp => {
        this.activeModal.dismiss();
      });
    }
  }

}
