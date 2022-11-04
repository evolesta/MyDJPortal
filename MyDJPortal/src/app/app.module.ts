import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './public/login/login.component';
import { IndexComponent } from './public/index/index.component';
import { HeaderComponent } from './dj/header/header.component';
import { FooterComponent } from './dj/footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dj/dashboard/dashboard.component';
import { InterceptorInterceptor } from './interceptor.interceptor';
import { ClientsComponent } from './dj/clients/clients.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddClientComponent } from './dj/clients/add-client/add-client.component';
import { EditClientComponent } from './dj/clients/edit-client/edit-client.component';
import { DeleteClientComponent } from './dj/clients/delete-client/delete-client.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ClientsComponent,
    AddClientComponent,
    EditClientComponent,
    DeleteClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
