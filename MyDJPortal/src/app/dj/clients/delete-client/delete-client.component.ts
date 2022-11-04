import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IninjaHttpService } from 'src/app/ininja-http.service';

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent {

  @Input() public id: string = '';

  constructor(public activeModal: NgbActiveModal,
      private http: IninjaHttpService) { }

  deleteClient(): void {
    this.http.delete('/clients/' + this.id).subscribe(resp => {
      this.activeModal.dismiss();
      console.log(resp)
    });
  }

}
