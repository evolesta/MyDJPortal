import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicHomeComponent } from './public/public-home/public-home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminBaseComponent } from './admin/admin-base/admin-base.component';
import { AdminClientsComponent } from './admin/admin-clients/admin-clients.component';
import { AuthInterceptorInterceptor } from './services/auth-interceptor.interceptor';
import { AddClientComponent } from './admin/admin-clients/add-client/add-client.component';
import { EditClientComponent } from './admin/admin-clients/edit-client/edit-client.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoaderInterceptor } from './spinner/loader.interceptor';
import { DeleteClientComponent } from './admin/admin-clients/delete-client/delete-client.component';
import { AdminLocationsComponent } from './admin/admin-locations/admin-locations.component';
import { AddLocationComponent } from './admin/admin-locations/add-location/add-location.component';
import { EditLocationComponent } from './admin/admin-locations/edit-location/edit-location.component';
import { DeleteLocationComponent } from './admin/admin-locations/delete-location/delete-location.component';
import { AdminGigsComponent } from './admin/admin-gigs/admin-gigs.component';
import { AddGigComponent } from './admin/admin-gigs/add-gig/add-gig.component';
import { EditGigComponent } from './admin/admin-gigs/edit-gig/edit-gig.component';
import { DeleteGigComponent } from './admin/admin-gigs/delete-gig/delete-gig.component';
import { AdminSettingsComponent } from './admin/admin-settings/admin-settings.component';
import { AdminGenChooseDataDialogComponent } from './admin/admin-gen-choose-data-dialog/admin-gen-choose-data-dialog.component';
import { AddGigstatusComponent } from './admin/admin-settings/add-gigstatus/add-gigstatus.component';
import { EditGigstatusComponent } from './admin/admin-settings/edit-gigstatus/edit-gigstatus.component';
import { DeleteGigstatusComponent } from './admin/admin-settings/delete-gigstatus/delete-gigstatus.component';
import { MatSelectModule } from '@angular/material/select';
import { DetailsGigComponent } from './admin/admin-gigs/details-gig/details-gig.component';
import {MatGridListModule} from '@angular/material/grid-list';
import localeNl from '@angular/common/locales/nl';
import { DatePipe, registerLocaleData } from '@angular/common';
import { AddPriceComponent } from './admin/admin-settings/add-price/add-price.component';
import { EditPriceComponent } from './admin/admin-settings/edit-price/edit-price.component';
import { DeletePriceComponent } from './admin/admin-settings/delete-price/delete-price.component';
import { FinanceComponent } from './admin/admin-gigs/finance/finance.component';
import { EditQuoteComponent } from './admin/admin-gigs/finance/edit-quote/edit-quote.component';
import { DeleteQuoteComponent } from './admin/admin-gigs/finance/delete-quote/delete-quote.component'

registerLocaleData(localeNl);

@NgModule({
  declarations: [
    AppComponent,
    PublicHomeComponent,
    AdminHomeComponent,
    AdminDashboardComponent,
    AdminBaseComponent,
    AdminClientsComponent,
    AddClientComponent,
    EditClientComponent,
    SpinnerComponent,
    DeleteClientComponent,
    AdminLocationsComponent,
    AddLocationComponent,
    EditLocationComponent,
    DeleteLocationComponent,
    AdminGigsComponent,
    AddGigComponent,
    EditGigComponent,
    DeleteGigComponent,
    AdminSettingsComponent,
    AdminGenChooseDataDialogComponent,
    AddGigstatusComponent,
    EditGigstatusComponent,
    DeleteGigstatusComponent,
    DetailsGigComponent,
    AddPriceComponent,
    EditPriceComponent,
    DeletePriceComponent,
    FinanceComponent,
    EditQuoteComponent,
    DeleteQuoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatTabsModule,
    MatSelectModule,
    MatGridListModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'nl-NL' },
    [DatePipe]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
