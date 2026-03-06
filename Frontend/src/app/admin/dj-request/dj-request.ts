import { ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { HttpService } from '../../helpers/http-service';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dj-request',
  imports: [CommonModule],
  templateUrl: './dj-request.html',
  styleUrl: './dj-request.css',
})
export class DjRequest implements OnInit {

  requests: any[] = [];

  constructor(private http: HttpService,
  private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.getRequests();
  }

  // get all the requests from the active gig
  getRequests(): void {
    this.http.get("/requests/").subscribe({
      next: (resp) => {
        // get requests
        const body:any = resp.body;
        this.requests = body;
        this.cdr.detectChanges();
      }
    })
  }

  // toggle the 'played' bool for a submitted request to true or false
  toggleRequest(id: string): void {
    this.http.patch('/requests/' + id + '/toggle/', '').subscribe({
      next: (resp) => {
        // toggled succesfully - refresh dataset
        this.getRequests();
      },
      error: (err) => {
        if (environment.debug)
          console.log(err)
      }
    });
  }

}
