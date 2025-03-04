import { Routes } from '@angular/router';
import { DisplayDataComponent } from './display-data/display-data.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:"display-data",
        component:DisplayDataComponent,
    },
    {
        path:"",
        component:HomeComponent,
    },
];
