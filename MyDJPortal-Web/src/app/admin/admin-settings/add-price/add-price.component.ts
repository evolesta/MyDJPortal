import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-add-price',
  templateUrl: './add-price.component.html',
  styleUrls: ['./add-price.component.css']
})
export class AddPriceComponent {
  addPriceForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    fixedPrice: new FormControl(),
  });

  constructor(private http: HttpClientService,
    public dialog: MatDialogRef<AddPriceComponent>) {}

  addNewPrice(): void {
    if(!this.addPriceForm.controls.fixedPrice.value)
      this.addPriceForm.controls.fixedPrice.patchValue(false);

    this.http.post('/pricesettings/', this.addPriceForm.value).subscribe(resp => {
      this.dialog.close();
    });
  }
}
