import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClientService } from 'src/app/services/http-client.service';
import { DeleteLocationComponent } from './delete-location/delete-location.component';

@Component({
  selector: 'app-admin-locations',
  templateUrl: './admin-locations.component.html',
  styleUrls: ['./admin-locations.component.css']
})
export class AdminLocationsComponent implements OnInit {

  locations: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'city', 'phone', 'email', 'options'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClientService,
    private modal: MatDialog) {}

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations(): void {
    this.http.get('/locations/').subscribe(resp => {
      const response:any = resp.body;
      this.locations = new MatTableDataSource(response);
    });
  }

  deleteLocation(id: string): void {
    const modalRef = this.modal.open(DeleteLocationComponent, {
      data: {
        id: id
      }
    });

    modalRef.afterClosed().subscribe(ref => {
      this.getLocations();
    });
  }
}
