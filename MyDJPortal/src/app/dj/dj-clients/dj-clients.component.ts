import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { IhttpService } from 'src/app/services/ihttp.service';
import { DjAddClientComponent } from './dj-add-client/dj-add-client.component';
import { DjDeleteClientComponent } from './dj-delete-client/dj-delete-client.component';
import { DjEditClientComponent } from './dj-edit-client/dj-edit-client.component';

@Component({
  selector: 'app-dj-clients',
  templateUrl: './dj-clients.component.html',
  styleUrls: ['./dj-clients.component.css']
})
export class DjClientsComponent implements OnInit {

  public displayedColumns: string[] = ['number', 'name', 'contact_name', 'email', 'options'];
  public clientsSource: any;

  constructor(private ihttp: IhttpService,
      private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.ihttp.get('/clients').subscribe(resp => {
      const response:any = resp.body;
      this.clientsSource = new MatTableDataSource(response.data.filter((client: { is_deleted: any; }) => !client.is_deleted));
    });
  }

  openAddNewClientDialog(): void {
    const dialogRef = this.dialog.open(DjAddClientComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.getClients();
    });
  }

  openEditClientDialog(id: string): void {
    const dialogRef = this.dialog.open(DjEditClientComponent, {
      data: {
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getClients();
    });
  }

  openDeleteClientDialog(id: string): void {
    const dialogRef = this.dialog.open(DjDeleteClientComponent, {
      data: {
        id: id
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getClients();
    });
  }

}