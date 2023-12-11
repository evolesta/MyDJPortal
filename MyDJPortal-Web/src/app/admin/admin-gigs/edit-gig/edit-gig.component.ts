import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, startWith, map } from 'rxjs';
import { HttpClientService } from 'src/app/services/http-client.service';
import { AdminGenChooseDataDialogComponent } from '../../admin-gen-choose-data-dialog/admin-gen-choose-data-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-gig',
  templateUrl: './edit-gig.component.html',
  styleUrls: ['./edit-gig.component.css']
})
export class EditGigComponent implements OnInit {

  gigId: string;

  editGigForm = new FormGroup({
    name: new FormControl('', Validators.required),
    clientId: new FormControl('', Validators.required),
    location_id: new FormControl(),
    date: new FormControl(),
    start: new FormControl(),
    end: new FormControl(),
    buildupReadyTime: new FormControl(),
    guests: new FormControl(),
    sound: new FormControl(),
    light: new FormControl(),
    notes: new FormControl()
  });

  constructor(private http: HttpClientService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router) {}

  ngOnInit(): void {
    this.gigId = this.route.snapshot.paramMap.get('id'); // get the gig id to edit from the url
    this.getGig();
  }

  // Get the current data from the api of the selected gig
  getGig(): void {
    this.http.get('/gigs/' + this.gigId + '/').subscribe(resp => {
      const response:any = resp.body;
      this.editGigForm.patchValue(response); // set the form

      // override the client id and location ID with the name (to the view) and ID to the formGroup
      this.editGigForm.controls.clientId.setValue(response.client.data.name);
      this.editGigForm.controls.clientId.setValue(response.client.data.id, {emitModelToViewChange: false});
      this.editGigForm.controls.location_id.setValue(response.location.name);
      this.editGigForm.controls.location_id.setValue(response.location.id, {emitModelToViewChange: false});
    });
  }

  // submits the modified data back to the api
  editGig(): void {
    this.http.put('/gigs/' + this.gigId + '/', this.editGigForm.value).subscribe(resp => {
      this.router.navigateByUrl('/admin/dashboard/gigs');
    });
  }

  // Function which opens the client search dialog
  openClientDialog() {
    const clientDialogRef = this.dialog.open(AdminGenChooseDataDialogComponent, {
      data: {
        model: '/ininja/clients/',
        displayedColumns: ['name'],
        columnNames: ['Naam'],
        title: 'Zoek klant'
      }
    });

    clientDialogRef.afterClosed().subscribe(result => {
      this.editGigForm.controls.clientId.setValue(result.row.name);
      this.editGigForm.controls.clientId.setValue(result.row.id, {emitModelToViewChange: false});
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
      this.editGigForm.controls.location_id.setValue(result.row.name);
      this.editGigForm.controls.location_id.setValue(result.row.id, {emitModelToViewChange: false});
    })
  }
}
