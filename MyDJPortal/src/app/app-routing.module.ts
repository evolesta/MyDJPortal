import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DjClientsComponent } from './dj/dj-clients/dj-clients.component';
import { DjDashboardComponent } from './dj/dj-dashboard/dj-dashboard.component';
import { DjGigsComponent } from './dj/dj-gigs/dj-gigs.component';
import { DjLoginComponent } from './dj/dj-login/dj-login.component';
import { PublicIndexComponent } from './public/public-index/public-index.component';

const routes: Routes = [
  { path: '', component: PublicIndexComponent },
  { path: 'dj/login', component: DjLoginComponent },
  { path: 'dj/dashboard', component: DjDashboardComponent },
  { path: 'dj/clients', component: DjClientsComponent },
  { path: 'dj/gigs', component: DjGigsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
