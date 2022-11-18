import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IhttpService } from 'src/app/services/ihttp.service';

@Component({
  selector: 'app-dj-edit-client',
  templateUrl: './dj-edit-client.component.html',
  styleUrls: ['./dj-edit-client.component.css']
})
export class DjEditClientComponent implements OnInit {

  public editClientForm = new FormGroup({
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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private http: IhttpService,
    private snackbar: MatSnackBar,
    private dialog: MatDialog)  { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient(): void {
    this.http.get("/clients/" + this.data.id).subscribe(resp => {
      const response:any = resp.body;
      this.editClientForm.patchValue(response.data);
      this.editClientForm.controls.contacts.patchValue(response.data.contacts[0]);
    });
  }

  editClient(): void {
    if (this.editClientForm.status === 'INVALID') {
      this.snackbar.open('Niet alle velden zijn ingevuld!', '', { duration: 4000 });
    }
    else {
      this.http.put("/clients/" + this.data.id, this.editClientForm.value).subscribe(resp => {
        this.dialog.closeAll();
        this.snackbar.open('Klant succesvol gewijzigd.', '', { duration: 4000 });
      })
    }
  }

}
