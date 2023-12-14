import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-delete-price',
  templateUrl: './delete-price.component.html',
  styleUrls: ['./delete-price.component.css']
})
export class DeletePriceComponent {
  constructor(private http: HttpClientService,
    @Inject(MAT_DIALOG_DATA) public data: {id: string},
    public dialog: MatDialogRef<DeletePriceComponent>) {}

  deletePrice(): void {
    this.http.delete('/pricesettings/' + this.data.id + '/').subscribe(resp => {
      this.dialog.close();
    });
  }
}
