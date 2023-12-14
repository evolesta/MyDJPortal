import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-details-gig',
  templateUrl: './details-gig.component.html',
  styleUrls: ['./details-gig.component.css']
})
export class DetailsGigComponent implements OnInit {

  gigData: any;

  dataSource = [];

  constructor(private http: HttpClientService,
    @Inject(MAT_DIALOG_DATA) public data: {id: string},
    private datepipe: DatePipe) {}

  ngOnInit(): void {
    this.getGig();
  }

  getGig(): void {
    this.http.get('/gigs/' + this.data.id + "/").subscribe(resp => {
      const response:any = resp.body;
      this.gigData = response;

      this.dataSource = [
        {label: 'Datum', data: this.datepipe.transform(this.gigData.date, 'EEEE d MMMM yyyy')},
        {label: 'Soort feest', data: this.gigData.name},
        {label: 'Plaats', data: this.gigData.location.city},
        {label: 'Aantal gasten', data: this.gigData.guests},
        {label: 'Tijdstip', data: this.datepipe.transform(this.parseTime(this.gigData.start), 'HH:mm') + ' - ' + this.datepipe.transform(this.parseTime(this.gigData.end), 'HH:mm')},
        {label: 'Opbouw gereed', data: this.datepipe.transform(this.parseTime(this.gigData.buildupReadyTime), 'HH:mm')},
        {label: 'Geluid mee', data: this.yesOrNo(this.gigData.sound)},
        {label: 'Licht mee', data: this.yesOrNo(this.gigData.light)},
        {label: 'Notities', data: this.gigData.notes},
      ]
    });
  }

  parseTime(time: string): Date {
    const date = new Date();
    const splitString = time.split(':');
    date.setHours(parseInt(splitString[0]));
    date.setMinutes(parseInt(splitString[1]));
    date.setSeconds(parseInt(splitString[2]));
    return date;
  }

  yesOrNo(value: boolean): string {
    return value ? 'Ja' : 'Nee';
  }

}
