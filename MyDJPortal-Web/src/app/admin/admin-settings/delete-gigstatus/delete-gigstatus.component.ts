import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-delete-gigstatus',
  templateUrl: './delete-gigstatus.component.html',
  styleUrls: ['./delete-gigstatus.component.css']
})
export class DeleteGigstatusComponent {

  constructor(private http: HttpClientService,
    public dialog: MatDialogRef<DeleteGigstatusComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: string}) {}

  deleteStatus() {
    this.http.delete('/gigstatusses/' + this.data.id + '/').subscribe(resp => {
      this.dialog.close();
    });
  }

}
