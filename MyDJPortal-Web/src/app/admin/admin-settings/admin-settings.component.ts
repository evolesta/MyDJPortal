import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.css']
})
export class AdminSettingsComponent implements OnInit {
  displayedColumnsPriceSettings: string[] = ['name', 'description', 'price', 'fixed'];
  priceSettingsData: MatTableDataSource<any>;

  constructor(private http: HttpClientService) {}

  ngOnInit(): void {
    this.getPriceSettings();
  }

  getPriceSettings(): void {
    this.http.get('/pricesettings/').subscribe(resp => {
      const response:any = resp.body;
      this.priceSettingsData = new MatTableDataSource(response);
    });
  }
}
