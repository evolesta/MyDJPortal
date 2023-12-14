import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClientService } from 'src/app/services/http-client.service';
import { AddGigstatusComponent } from './add-gigstatus/add-gigstatus.component';
import { EditGigstatusComponent } from './edit-gigstatus/edit-gigstatus.component';
import { DeleteGigstatusComponent } from './delete-gigstatus/delete-gigstatus.component';
import { AddPriceComponent } from './add-price/add-price.component';
import { EditPriceComponent } from './edit-price/edit-price.component';
import { DeletePriceComponent } from './delete-price/delete-price.component';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css']
})
export class AdminSettingsComponent implements OnInit {
  displayedColumnsPriceSettings: string[] = ['name', 'description', 'price', 'fixed', 'edit', 'delete'];
  priceSettingsData: MatTableDataSource<any>;
  displayedColumnsGigStatusses: string[] = ['name', 'description', 'edit', 'delete'];
  gigStatusses: MatTableDataSource<any>;

  constructor(private http: HttpClientService,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getPriceSettings();
    this.getGigStatusses();
  }

  getPriceSettings(): void {
    this.http.get('/pricesettings/').subscribe(resp => {
      const response:any = resp.body;
      this.priceSettingsData = new MatTableDataSource(response);
    });
  }

  yesOrNo(value: boolean): string {
    return value ? 'Ja' : 'Nee';
  }

  openAddPriceDialog(): void {
    const dialogRef = this.dialog.open(AddPriceComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getPriceSettings();
    });
  }

  openEditPriceDialog(id: string): void {
    const dialogRef = this.dialog.open(EditPriceComponent, {
      data: {
        id: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getPriceSettings();
    });
  }

  openDeletePriceDialog(id: string): void {
    const dialogRef = this.dialog.open(DeletePriceComponent, {
      data: {
        id: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getPriceSettings();
    });
  }

  // Gig statusses settings
  getGigStatusses(): void {
    this.http.get('/gigstatusses/').subscribe(resp => {
      const response:any = resp.body;
      this.gigStatusses = new MatTableDataSource(response);
    })
  }

  openAddGigStatusDialog(): void {
    const dialogRef = this.dialog.open(AddGigstatusComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getGigStatusses();
    });
  }

  openEditGigStatusDialog(id: string): void {
    const dialogRef = this.dialog.open(EditGigstatusComponent, {
      data: {
        id: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getGigStatusses();
    });
  }

  openDeleteGigStatusDialog(id: string): void {
    const dialogRef = this.dialog.open(DeleteGigstatusComponent, {
      data: {
        id: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getGigStatusses();
    })
  }
}
