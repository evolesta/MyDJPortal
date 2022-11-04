import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faEdit, faSave } from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IninjaHttpService } from 'src/app/ininja-http.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  public editClientForm = new FormGroup({
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


  @Input() public id: string = '';

  constructor(private http: IninjaHttpService,
      public activeModal: NgbActiveModal) { }

  public faSave = faSave;
  public faEdit = faEdit;

  public error: string = '';

  ngOnInit(): void {
    this.getClient();
  }

  getClient(): void {
    this.http.get('/clients/' + this.id).subscribe(resp => {
      const response:any = resp.body;
      this.editClientForm.patchValue(response.data);
      this.editClientForm.controls['contacts'].patchValue(response.data.contacts[0]);
    });
  }

  editClient(): void {
    if (this.editClientForm.status === 'INVALID') {
      this.error = 'Niet alle velden zijn correct ingevuld.';
    }
    else if (this.editClientForm.status === 'VALID') {
      this.http.put('/clients/' + this.id, this.editClientForm.value).subscribe(resp => {
        this.activeModal.dismiss();
      });
    }
  }

}
