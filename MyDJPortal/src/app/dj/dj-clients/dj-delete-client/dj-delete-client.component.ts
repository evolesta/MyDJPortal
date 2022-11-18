import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IhttpService } from 'src/app/services/ihttp.service';

@Component({
  selector: 'app-dj-delete-client',
  templateUrl: './dj-delete-client.component.html',
  styleUrls: ['./dj-delete-client.component.css']
})
export class DjDeleteClientComponent {

  constructor(private ihttp: IhttpService,
      private snackbar: MatSnackBar,
      private dialog: MatDialog,
      @Inject(MAT_DIALOG_DATA) public data: any) { }

  deleteClient(): void {
    this.ihttp.delete("/clients/" + this.data.id).subscribe(resp => {
      this.dialog.closeAll();
      this.snackbar.open("Klant succesvol verwijderd.", '', { duration: 4000 });
    });
  }
}
