import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IhttpService } from 'src/app/services/ihttp.service';

@Component({
  selector: 'app-dj-add-client',
  templateUrl: './dj-add-client.component.html',
  styleUrls: ['./dj-add-client.component.css']
})
export class DjAddClientComponent {

  public addClientForm = new FormGroup({
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

  constructor(private ihttp: IhttpService,
      private snackbar: MatSnackBar,
      private dialog: MatDialog) { }

  addNewClient(): void {
    if (this.addClientForm.status === 'INVALID') {
      this.snackbar.open("Niet alle velden zijn ingevuld!", '', { duration: 4000});
    }
    else {
      this.ihttp.post('/clients', this.addClientForm.value).subscribe(resp => {
        this.dialog.closeAll();
        this.snackbar.open("Klant succesvol toegevoegd.", '', { duration: 4000 });
      });
    }
  }
}
