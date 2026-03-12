import { Routes } from '@angular/router';
import { Login } from './admin/login/login';
import { DashboardComponent } from './admin/dashboard-component/dashboard-component';
import { BaseComponent } from './admin/base-component/base-component';
import { RequestComponent } from './public/request-component/request-component';
import { AddRequestComponent } from './public/add-request-component/add-request-component';
import { guardGuard } from './helpers/guard-guard';
import { DjRequest } from './admin/dj-request/dj-request';
import { DjRequestAdd } from './admin/dj-request/dj-request-add/dj-request-add';
import { DjClients } from './admin/dj-clients/dj-clients';
import { DjClientsMod } from './admin/dj-clients/dj-clients-mod/dj-clients-mod';

export const routes: Routes = [
    { path: '', component: RequestComponent },
    { path: 'request/add', component: AddRequestComponent },
    { path: 'dj/login', component: Login },
    { 
        path: 'dj', 
        component: BaseComponent,
        canActivate: [guardGuard],
        children: [
            { path: 'home', component: DashboardComponent },
            { path: 'requests', component: DjRequest },
            { path: 'requests/add', component: DjRequestAdd },
            { path: 'clients', component: DjClients },
            { path: 'clients/add', component: DjClientsMod },
            { path: 'clients/edit', component: DjClientsMod }
        ]
    }
];
