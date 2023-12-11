import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-admin-gen-choose-data-dialog',
  templateUrl: './admin-gen-choose-data-dialog.component.html',
  styleUrls: ['./admin-gen-choose-data-dialog.component.css']
})
export class AdminGenChooseDataDialogComponent implements OnInit {

  displayedColumns: string[] = this.data.displayedColumns;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: {model: string, displayedColumns: string[], columnNames: string[], title: string},
      private http: HttpClientService,
      public dialogRef: MatDialogRef<AdminGenChooseDataDialogComponent>) {}

  ngOnInit(): void {
    this.getData();
  }

  // Functions expects an API endpoint to retrieve and to display in the table. 
  getData(): void {
    this.http.get(this.data.model).subscribe(resp => {
      var response:any = resp.body;

      // if the source is from invoice ninja, it will return with a dataitem array instead
      if (this.data.model.includes('ininja'))
        response = response.data;
      
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  // Filter function to filter trough the data
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Close the dialog as the user selects a row, and return the full row to the parent component
  closeDialog(row): void {
    this.dialogRef.close({
      row: row
    });
  }
}
