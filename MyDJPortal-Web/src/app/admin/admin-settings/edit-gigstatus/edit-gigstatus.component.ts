import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-edit-gigstatus',
  templateUrl: './edit-gigstatus.component.html',
  styleUrls: ['./edit-gigstatus.component.css']
})
export class EditGigstatusComponent implements OnInit {
  editGigStatusForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl()
  });

  statusId;

  constructor(private http: HttpClientService,
    public dialog: MatDialogRef<EditGigstatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: string}) {}

  ngOnInit(): void {
    this.statusId = this.data.id;
    this.getStatus();
  }

  getStatus(): void {
    this.http.get('/gigstatusses/' + this.statusId + '/').subscribe(resp => {
      const response:any = resp.body;
      this.editGigStatusForm.patchValue(response);
    });
  }

  editStatus(): void {
    this.http.put('/gigstatusses/' + this.statusId + '/', this.editGigStatusForm.value).subscribe(resp => {
      this.dialog.close();
    })
  }
}
