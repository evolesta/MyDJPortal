import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { startWith, map, Observable } from 'rxjs';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-add-gig',
  templateUrl: './add-gig.component.html',
  styleUrls: ['./add-gig.component.css']
})
export class AddGigComponent implements OnInit {

  addGigForm = new FormGroup({
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

  clients: any[] = [];
  locations: any[] = [];
  filteredClients: Observable<any[]>;
  filteredLocations: Observable<any[]>;

  constructor(private http: HttpClientService,
    private router: Router) {}

  ngOnInit(): void {
    // get the clients
    this.getClients();
    this.getLocations();
  }

  addGig(): void {
    // set the clientId to the formControl from the object which the autocompletes has set to the control
    const client:any = this.addGigForm.controls.clientId.value;
    const location:any = this.addGigForm.controls.location_id.value;
    this.addGigForm.controls.clientId.patchValue(client.id);
    this.addGigForm.controls.location_id.patchValue(location.id);

    // check if the boolean sound + light isnt null
    if(!this.addGigForm.controls.sound.value)
      this.addGigForm.controls.sound.patchValue(false);
    if(!this.addGigForm.controls.light.value)
      this.addGigForm.controls.light.patchValue(false);
    
    this.http.post('/gigs/', this.addGigForm.value).subscribe(resp => {
      this.router.navigateByUrl('/admin/dashboard/gigs');
    });
  }

  // == AUTOCOMPLETE FUNCTIONS ==
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
    this.filteredClients = this.addGigForm.controls.clientId.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value;
        return name ? this._filterClients(name as string) : this.clients.slice();
      })
    );
  }

  initialiseAutoComplLoc(): void {
    this.filteredLocations = this.addGigForm.controls.location_id.valueChanges.pipe(
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
