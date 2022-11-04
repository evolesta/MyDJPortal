import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { IndexComponent } from './public/index/index.component';
import { DashboardComponent } from './dj/dashboard/dashboard.component';
import { GuardGuard } from './guard.guard';
import { ClientsComponent } from './dj/clients/clients.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'dj/login', component: LoginComponent },
  { path: 'dj/dashboard', component: DashboardComponent, canActivate: [GuardGuard] },
  { path: 'dj/clients', component: ClientsComponent, canActivate: [GuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
