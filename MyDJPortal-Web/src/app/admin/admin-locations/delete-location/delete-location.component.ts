import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-delete-location',
  templateUrl: './delete-location.component.html',
  styleUrls: ['./delete-location.component.css']
})
export class DeleteLocationComponent {

  constructor(private http: HttpClientService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data) {}

    deleteLocation(): void {
      this.http.delete('/locations/' + this.data.id + '/').subscribe(resp => {
        this.dialog.closeAll();
      });
    }
}
