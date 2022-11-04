import { Component, OnInit } from '@angular/core';
import { IninjaHttpService } from 'src/app/ininja-http.service';
import { faEdit, faTrash, faAdd } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { DeleteClientComponent } from './delete-client/delete-client.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public clients: any;
  public pageClients: any;

  public faAdd = faAdd;
  public faEdit = faEdit;
  public faTrash = faTrash;

  public tablePage: number = 1;
  public pageSize: number = 10;
  public collectionSize: number = 0;

  constructor(private iHttp: IninjaHttpService,
      private modal: NgbModal) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void {
    this.iHttp.get('/clients').subscribe(resp => {
      this.clients = resp.body;
      this.collectionSize = this.clients.data.length;
      this.refreshClients();
    });
  }

  refreshClients(): void {
    const from = (this.tablePage - 1) * this.pageSize;
    const to = (this.tablePage - 1) * this.pageSize + this.pageSize;
    this.pageClients = this.clients.data.slice(from, to);
    this.pageClients = this.pageClients.filter((x: { is_deleted: boolean; }) => x.is_deleted == false);
  }

  openAddClientModal(): void {
    const modalRef = this.modal.open(AddClientComponent, { size: 'lg' });
    modalRef.dismissed.subscribe(result => {
      this.getClients();
    });
  }

  openEditClientModal(id: string): void {
    const modalRef = this.modal.open(EditClientComponent, { size: 'lg' });
    modalRef.componentInstance.id = id;
    modalRef.dismissed.subscribe(result => {
      this.getClients();
    });
  }

  openDeleteClientModal(id: string): void {
    const modalRef = this.modal.open(DeleteClientComponent);
    modalRef.componentInstance.id = id;
    modalRef.dismissed.subscribe(result => {
      this.getClients();
    });
  }

}
