import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { async, debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { IhttpService } from 'src/app/services/ihttp.service';

export interface Client {
  id: string,
  name: string;
}

@Component({
  selector: 'app-dj-add-gig',
  templateUrl: './dj-add-gig.component.html',
  styleUrls: ['./dj-add-gig.component.css']
})
export class DjAddGigComponent implements OnInit {

  public addGigForm = new FormGroup({
    client_id: new FormControl('', Validators.required),
    gigType: new FormControl(),
    location_id: new FormControl(),
    gigDate: new FormControl(),
    gigStart: new FormControl(),
    gigEnd: new FormControl(),
    amountGuests: new FormControl(),
    sound: new FormControl(),
    light: new FormControl(),
    status: new FormControl()
  });

  public clients: string[] = [];
  public filteredClients: Observable<string[]> | undefined;

  constructor(private ihttp: IhttpService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.ihttp.get("/clients").subscribe(resp => {
      const response:any = resp.body;
      this.clients = response.data;

      this.filteredClients = this.addGigForm.controls.client_id.valueChanges.pipe(
        startWith(''),
        map(value =>  this._filter(value || ''))
      );
      console.log(this.filteredClients)
    });
  }

  _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.clients.filter(option => option.toString().toLowerCase().includes(filterValue));
  }

  displayFn(client: any): string {
    return client.name;
  }

  addNewGig(): void {}

}
