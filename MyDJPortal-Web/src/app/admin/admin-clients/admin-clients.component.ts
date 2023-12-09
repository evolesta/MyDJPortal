import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClientService } from 'src/app/services/http-client.service';
import { DeleteClientComponent } from './delete-client/delete-client.component';

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.css']
})
export class AdminClientsComponent implements OnInit {

  clientsData;
  displayedColumns: string[] = ['number', 'name', 'contact', 'email', 'options'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClientService,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.http.get('/ininja/clients/').subscribe(resp => {
      const response:any = resp.body;
      this.clientsData = new MatTableDataSource(response.data.filter(item => item.is_deleted === false));
      this.clientsData.paginator = this.paginator;
    });
  }

  deleteClient(id): void {
    const dialogRef = this.dialog.open(DeleteClientComponent, {
      data: {
        id: id
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.getClients();
    });
  }
}