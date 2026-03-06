import { Routes } from '@angular/router';
import { Login } from './admin/login/login';
import { DashboardComponent } from './admin/dashboard-component/dashboard-component';
import { BaseComponent } from './admin/base-component/base-component';
import { RequestComponent } from './public/request-component/request-component';
import { AddRequestComponent } from './public/add-request-component/add-request-component';
import { guardGuard } from './helpers/guard-guard';
import { DjRequest } from './admin/dj-request/dj-request';
import { DjRequestAdd } from './admin/dj-request-add/dj-request-add';

export const routes: Routes = [
    { path: '', component: RequestComponent },
    { path: 'request/add', component: AddRequestComponent },
    { path: 'admin/login', component: Login },
    { 
        path: 'admin', 
        component: BaseComponent,
        canActivate: [guardGuard],
        children: [
            { path: 'home', component: DashboardComponent },
            { path: 'requests', component: DjRequest },
            { path: 'requests/add', component: DjRequestAdd },
        ]
    }
];
