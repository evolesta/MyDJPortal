import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from 'src/app/services/http-client.service';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
  gigid: any;
  gigData: any;

  displayedColumns: string[] = ['number', 'client', 'date', 'amount', 'edit', 'delete'];
  invoiceDataSource: MatTableDataSource<any>;
  quotesDataSource: MatTableDataSource<any>;

  constructor(private route: ActivatedRoute,
    private http: HttpClientService,
    private router: Router) {}

  ngOnInit(): void {
    this.gigid = this.route.snapshot.paramMap.get('id');
    this.getGig();
    this.getInvoices();
    this.getQuotes();
  }

  getGig(): void {
    this.http.get('/gigs/' + this.gigid + '/').subscribe(resp => {
      const response:any = resp.body;
      this.gigData = response;
    });
  }

  getInvoices(): void {
    this.http.get('/gigs/' + this.gigid + '/invoices/').subscribe(resp => {
      const response:any = resp.body;
      this.invoiceDataSource = new MatTableDataSource(response);
    });
  }

  getQuotes(): void {
    this.http.get('/gigs/' + this.gigid + '/quotes/').subscribe(resp => {
      const response:any = resp.body;
      	this.quotesDataSource = new MatTableDataSource(response);
    });
  }

  addQuote(): void {
    this.http.get('/ininja/quotes/create/').subscribe(resp => {
      const response:any = resp.body;
      const body = {'quoteId': response.data.id};
      console.log(response)

      this.http.post('/gigs/' + this.gigid + '/addquote/', body).subscribe(resp2 => {
        const response2:any = resp2.body;
        this.router.navigateByUrl('/admin/dashboard/gigs/finance/' + this.gigid + '/quote/edit/' + response2.data.id);
      });
    });
  }
}
