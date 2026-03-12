import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpService } from '../../helpers/http-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dj-clients',
  imports: [CommonModule, RouterModule],
  templateUrl: './dj-clients.html',
  styleUrl: './dj-clients.css',
})
export class DjClients implements OnInit {

  clients: any[] = [];

  constructor(private http: HttpService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.http.get('/clients/').subscribe({
      next: (resp) => {
        const body:any = resp.body;
        this.clients = body;
        this.cdr.detectChanges();
        }
    });
  }

}
