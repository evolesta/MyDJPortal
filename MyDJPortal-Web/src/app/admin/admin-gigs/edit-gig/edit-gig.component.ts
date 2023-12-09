import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, startWith, map } from 'rxjs';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-edit-gig',
  templateUrl: './edit-gig.component.html',
  styleUrls: ['./edit-gig.component.css']
})
export class EditGigComponent implements OnInit {

  gigId: string;
  clients: any;
  locations: any;
  filteredClients: Observable<any[]>;
  filteredLocations: Observable<any[]>;

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
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.gigId = this.route.snapshot.paramMap.get('id');
    this.getGig();
    this.getClients();
    this.getLocations();
  }

  getGig(): void {
    this.http.get('/gigs/' + this.gigId + '/').subscribe(resp => {
      const response:any = resp.body;
      this.editGigForm.controls.clientId.setValue(response.clientId);
      this.editGigForm.patchValue(response);
    });
  }

  editGig(): void {

  }

  // == AutoComplete ==
  // Get all the active clients from Invoince Ninja
  getClients(): void {
    this.http.get('/ininja/clients/').subscribe(resp => {
      const response:any = resp.body;
      this.clients = response.data.filter((client: { is_deleted: any }) => !client.is_deleted);

      this.initialiseAutoComplClient();
    });
  }

  // Get all the locations from the api
  getLocations(): void {
    this.http.get('/locations/').subscribe(resp => {
      const response:any = resp.body;
      this.locations = response;

      this.initialiseAutoComplLoc();
    });
  }

  initialiseAutoComplClient(): void {
    // initalize the autocomplete
    this.filteredClients = this.editGigForm.controls.clientId.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value;
        return name ? this._filterClients(name as string) : this.clients.slice();
      })
    );
  }

  initialiseAutoComplLoc(): void {
    this.filteredLocations = this.editGigForm.controls.location_id.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value;
        return name ? this._filterLocations(name as string) : this.locations.slice();
      })
    );
  }

  // Filter the collection of clients based on the input of the user
  private _filterClients(value: string): any[] {
    const filterValue = value.toString().toLowerCase();
    return this.clients.filter(client => client.name.toLowerCase().includes(filterValue));
  }

  private _filterLocations(value: string): any[] {
    const filterValue = value.toString().toLowerCase();
    return this.locations.filter(location => location.name.toLowerCase().includes(filterValue));
  }

  // Function which shows the name of the client in the form 
  displayClientName(client: any): string {
    return client && client.name ? client.name : '';
  }

  displayLocationName(location: any): string {
    return location && location.name ? location.name : '';
  }
}
