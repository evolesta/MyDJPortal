import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/services/http.service';
import { DjAddGigComponent } from './dj-add-gig/dj-add-gig.component';

@Component({
  selector: 'app-dj-gigs',
  templateUrl: './dj-gigs.component.html',
  styleUrls: ['./dj-gigs.component.css']
})
export class DjGigsComponent implements OnInit {

  public gigSource: any;
  public displayedColumns: string[] = ['gigDate', 'location', 'client', 'options'];

  constructor(private http: HttpService,
      private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getGigs();
  }

  getGigs(): void {
    this.http.get('/gigs').subscribe(resp => {
      const response:any = resp.body;
      this.gigSource = new MatTableDataSource(response);
    });
  }

  openAddNewGigDialog(): void {
    const dialogRef = this.dialog.open(DjAddGigComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getGigs();
    });
  }

  openEditGigDialog(id: string) {}

  openDeleteGigDialog(id: string) {}

}
