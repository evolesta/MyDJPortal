import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent {

  constructor(private http: HttpClientService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data) {}

  deleteClient(): void {
    this.http.delete('/ininja/clients/' + this.data.id + '/').subscribe(resp => {
      this.dialog.closeAll();
    });
  }

}
