import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-edit-price',
  templateUrl: './edit-price.component.html',
  styleUrls: ['./edit-price.component.css']
})
export class EditPriceComponent implements OnInit {

  editPriceForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    fixedPrice: new FormControl(),
  });

  constructor(private http: HttpClientService,
    @Inject(MAT_DIALOG_DATA) public data: {id: string},
    public dialog: MatDialogRef<EditPriceComponent>) {}

  ngOnInit(): void {
    this.getPriceSetting();
  }

  getPriceSetting(): void {
    this.http.get('/pricesettings/' + this.data.id + '/').subscribe(resp => {
      const response:any = resp.body;
      this.editPriceForm.patchValue(response);
    });
  }

  editPriceSetting(): void {
    this.http.put('/pricesettings/' + this.data.id + '/', this.editPriceForm.value).subscribe(resp => {
      this.dialog.close();
    });
  } 

}
