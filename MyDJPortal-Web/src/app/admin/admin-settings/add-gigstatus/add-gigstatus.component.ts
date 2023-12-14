import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-add-gigstatus',
  templateUrl: './add-gigstatus.component.html',
  styleUrls: ['./add-gigstatus.component.css']
})
export class AddGigstatusComponent {

  addGigStatusForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl()
  });

  constructor(private http: HttpClientService,
    public dialog: MatDialogRef<AddGigstatusComponent>) {}

  addStatus(): void {
    this.http.post('/gigstatusses/', this.addGigStatusForm.value).subscribe(resp => {
      this.dialog.close();
    });
  }
}
