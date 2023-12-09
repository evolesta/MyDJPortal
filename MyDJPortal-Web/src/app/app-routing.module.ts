import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicHomeComponent } from './public/public-home/public-home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AuthGuardGuard } from './services/auth-guard.guard';
import { AdminBaseComponent } from './admin/admin-base/admin-base.component';
import { AdminClientsComponent } from './admin/admin-clients/admin-clients.component';
import { AddClientComponent } from './admin/admin-clients/add-client/add-client.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { EditClientComponent } from './admin/admin-clients/edit-client/edit-client.component';
import { AdminLocationsComponent } from './admin/admin-locations/admin-locations.component';
import { AddLocationComponent } from './admin/admin-locations/add-location/add-location.component';
import { EditLocationComponent } from './admin/admin-locations/edit-location/edit-location.component';
import { AdminGigsComponent } from './admin/admin-gigs/admin-gigs.component';
import { AddGigComponent } from './admin/admin-gigs/add-gig/add-gig.component';
import { AdminSettingsComponent } from './admin/admin-settings/admin-settings.component';
import { EditGigComponent } from './admin/admin-gigs/edit-gig/edit-gig.component';

const routes: Routes = [
  // Public routes
  { path: '', component: PublicHomeComponent },

  // Client routes

  // admin routes
  { path: 'admin', component: AdminHomeComponent },
  { 
    path: 'admin/dashboard', 
    component: AdminBaseComponent, 
    children: [
    { path: '', component: AdminDashboardComponent, canActivate: [AuthGuardGuard] },
    { path: 'clients', component: AdminClientsComponent, canActivate: [AuthGuardGuard] },
    { path: 'clients/add', component: AddClientComponent, canActivate: [AuthGuardGuard] },
    { path: 'clients/edit/:id', component: EditClientComponent, canActivate: [AuthGuardGuard] },
    { path: 'locations', component: AdminLocationsComponent, canActivate: [AuthGuardGuard] },
    { path: 'locations/add', component: AddLocationComponent, canActivate: [AuthGuardGuard] },
    { path: 'locations/edit/:id', component: EditLocationComponent, canActivate: [AuthGuardGuard] },
    { path: 'gigs', component: AdminGigsComponent, canActivate: [AuthGuardGuard] },
    { path: 'gigs/add', component: AddGigComponent, canActivate: [AuthGuardGuard] },
    { path: 'gigs/edit/:id', component: EditGigComponent, canActivate: [AuthGuardGuard] },
    { path: 'settings', component: AdminSettingsComponent, canActivate: [AuthGuardGuard] },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
