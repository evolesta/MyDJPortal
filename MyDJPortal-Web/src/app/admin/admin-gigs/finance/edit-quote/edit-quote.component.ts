import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.css']
})
export class EditQuoteComponent implements OnInit {
  
  addQuoteForm = new FormGroup({
    number: new FormControl(),
    date: new FormControl(),
    line_items: new FormGroup({
      quantity: new FormControl(),
      notes: new FormControl(),
      cost: new FormControl(),
      line_total: new FormControl()
    }),
    amount: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {
    
  }

}
