import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicIndexComponent } from './public/public-index/public-index.component';
import { PublicAheaderComponent } from './public/public-aheader/public-aheader.component';
import { PublicAfooterComponent } from './public/public-afooter/public-afooter.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { DjLoginComponent } from './dj/dj-login/dj-login.component';
import { DjAheaderComponent } from './dj/dj-aheader/dj-aheader.component';
import { DjAfooterComponent } from './dj/dj-afooter/dj-afooter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DjDashboardComponent } from './dj/dj-dashboard/dj-dashboard.component';
import { DjClientsComponent } from './dj/dj-clients/dj-clients.component';
import {MatIconModule} from '@angular/material/icon';
import { AuthInterceptor } from './services/auth.interceptor';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import { DjAddClientComponent } from './dj/dj-clients/dj-add-client/dj-add-client.component';
import { DjEditClientComponent } from './dj/dj-clients/dj-edit-client/dj-edit-client.component';
import { DjDeleteClientComponent } from './dj/dj-clients/dj-delete-client/dj-delete-client.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DjGigsComponent } from './dj/dj-gigs/dj-gigs.component';
import { DjAddGigComponent } from './dj/dj-gigs/dj-add-gig/dj-add-gig.component';
import { DjEditGigComponent } from './dj/dj-gigs/dj-edit-gig/dj-edit-gig.component';
import { DjDeleteGigComponent } from './dj/dj-gigs/dj-delete-gig/dj-delete-gig.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    PublicIndexComponent,
    PublicAheaderComponent,
    PublicAfooterComponent,
    DjLoginComponent,
    DjAheaderComponent,
    DjAfooterComponent,
    DjDashboardComponent,
    DjClientsComponent,
    DjAddClientComponent,
    DjEditClientComponent,
    DjDeleteClientComponent,
    DjGigsComponent,
    DjAddGigComponent,
    DjEditGigComponent,
    DjDeleteGigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDialogModule,
    MatAutocompleteModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
