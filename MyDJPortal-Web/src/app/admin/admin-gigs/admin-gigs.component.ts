import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClientService } from 'src/app/services/http-client.service';
import { DeleteGigComponent } from './delete-gig/delete-gig.component';

@Component({
  selector: 'app-admin-gigs',
  templateUrl: './admin-gigs.component.html',
  styleUrls: ['./admin-gigs.component.css']
})
export class AdminGigsComponent implements OnInit {

  displayedColumns: string[] = ['date', 'client', 'location', 'music', 'invoice', 'details', 'options'];
  gigs: MatTableDataSource<any>;

  constructor(private http: HttpClientService,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getGigs();
  }

  getGigs(): void {
    this.http.get('/gigs/').subscribe(resp => {
      const response:any = resp.body;
      this.gigs = new MatTableDataSource(response);
    });
  }

  openDeleteGigModal(id: string) {
    const dialogRef = this.dialog.open(DeleteGigComponent, {
      data: {
        id: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getGigs();
    });
  }
}
