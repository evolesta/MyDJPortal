import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-admin-gigs',
  templateUrl: './admin-gigs.component.html',
  styleUrls: ['./admin-gigs.component.css']
})
export class AdminGigsComponent implements OnInit {

  displayedColumns: string[] = ['date', 'client', 'location', 'music', 'invoice', 'details', 'options'];
  gigs: MatTableDataSource<any>;

  constructor(private http: HttpClientService) {}

  ngOnInit(): void {
    this.getGigs();
  }

  getGigs(): void {
    this.http.get('/gigs/').subscribe(resp => {
      const response:any = resp.body;
      this.gigs = new MatTableDataSource(response);
    });
  }
}
