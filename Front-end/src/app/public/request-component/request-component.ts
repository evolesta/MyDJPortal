import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpService } from '../../helpers/http-service';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-request-component',
  imports: [CommonModule, RouterModule],
  templateUrl: './request-component.html',
  styleUrl: './request-component.css',
})
export class RequestComponent implements OnInit {

  // global vars
  requestData: any;
  requestSettings: any;
  
  constructor(private http: HttpService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getRequestSettings();
  }

  getRequest(): void {
    this.http.get('/requests/').subscribe({
      next: (resp) => {
        const body = resp.body as any[];

        // Sort array from new > old
        if (body && Array.isArray(body)) {
          this.requestData = body.sort((a, b) => b.id - a.id);
        }

        this.cdr.detectChanges(); // refresh table
      }
    });
  }

  getRequestSettings(): void {
    this.http.get('/requestSettings/').subscribe({
      next: (resp) => {
        const body:any = resp.body;
        this.requestSettings = body;

        if (this.requestSettings)
          this.getRequest();
      }
    });
  }

}
