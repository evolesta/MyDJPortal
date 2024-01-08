import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { startWith, map, Observable } from 'rxjs';
import { HttpClientService } from 'src/app/services/http-client.service';
import { AdminGenChooseDataDialogComponent } from '../../admin-gen-choose-data-dialog/admin-gen-choose-data-dialog.component';

@Component({
  selector: 'app-add-gig',
  templateUrl: './add-gig.component.html',
  styleUrls: ['./add-gig.component.css']
})
export class AddGigComponent implements OnInit {

  addGigForm = new FormGroup({
    name: new FormControl('', Validators.required),
    client_id: new FormControl('', Validators.required),
    location_id: new FormControl('', Validators.required),
    date: new FormControl(),
    start: new FormControl(),
    end: new FormControl(),
    buildupReadyTime: new FormControl(),
    guests: new FormControl(),
    sound: new FormControl(),
    light: new FormControl(),
    notes: new FormControl(),
    status_id: new FormControl('', Validators.required)
  });

  gigStatusses: any;

  constructor(private http: HttpClientService,
    private router: Router,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getGigStatusses();
  }

  getGigStatusses(): void {
    this.http.get('/gigstatusses/').subscribe(resp => {
      const response:any = resp.body;
      this.gigStatusses = response;
    });
  }

  addGig(): void {
    // check if the boolean sound + light isnt null
    if(!this.addGigForm.controls.sound.value)
      this.addGigForm.controls.sound.patchValue(false);
    if(!this.addGigForm.controls.light.value)
      this.addGigForm.controls.light.patchValue(false);
    
    this.http.post('/gigs/', this.addGigForm.value).subscribe(resp => {
      this.router.navigateByUrl('/admin/dashboard/gigs');
    });
  }

  // Function which opens the client search dialog
  openClientDialog() {
    const clientDialogRef = this.dialog.open(AdminGenChooseDataDialogComponent, {
      data: {
        model: '/clients/',
        displayedColumns: ['name'],
        columnNames: ['Naam'],
        title: 'Zoek klant'
      }
    });

    clientDialogRef.afterClosed().subscribe(result => {
      this.addGigForm.controls.client_id.setValue(result.row.name);
      this.addGigForm.controls.client_id.setValue(result.row.id, {emitModelToViewChange: false});
    })
  }

  // Function which opens the location search dialog
  openLocationDialog(): void {
    const locDialogRef = this.dialog.open(AdminGenChooseDataDialogComponent, {
      data: {
        model: '/locations/',
        displayedColumns: ['name'],
        columnNames: ['Naam'],
        title: 'Zoek locatie'
      }
    });

    locDialogRef.afterClosed().subscribe(result => {
      this.addGigForm.controls.location_id.setValue(result.row.name);
      this.addGigForm.controls.location_id.setValue(result.row.id, {emitModelToViewChange: false});
    })
  }
}
