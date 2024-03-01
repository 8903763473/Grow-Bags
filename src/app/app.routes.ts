import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'contact',
        component: ContactUsComponent
    },
    {
        path: 'about',
        component: AboutUsComponent
    },
    // {
    //     path: 'adminPanel',
    //     component: AdminPanelComponent
    // },
    {
        path: 'ourService/:id',
        component: OurServicesComponent
    },
];
