import { Routes } from '@angular/router';
import { Login } from './admin/login/login';
import { DashboardComponent } from './admin/dashboard-component/dashboard-component';
import { BaseComponent } from './admin/base-component/base-component';
import { RequestComponent } from './public/request-component/request-component';
import { AddRequestComponent } from './public/add-request-component/add-request-component';

export const routes: Routes = [
    { path: '', component: RequestComponent },
    { path: 'request/add', component: AddRequestComponent },
    { path: 'admin/login', component: Login },
    { 
        path: 'admin/base', 
        component: BaseComponent,
        children: [
            
        ]
    }
];
