import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
  gigid: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.gigid = this.route.snapshot.paramMap.get('id');
  }
}
