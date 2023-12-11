import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-delete-gig',
  templateUrl: './delete-gig.component.html',
  styleUrls: ['./delete-gig.component.css']
})
export class DeleteGigComponent {

  constructor(private http: HttpClientService,
    @Inject(MAT_DIALOG_DATA) public data: {id: string},
    public dialogRef: MatDialogRef<DeleteGigComponent>) {}

  deleteGig(): void {
    this.http.delete('/gigs/' + this.data.id + '/').subscribe(resp => {
      this.dialogRef.close();
    });
  }

}
