import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent

    },
    {
        path: 'about',
        component: AboutComponent

    },
    {
        path: 'contact',
        component: ContactComponent

    },
    {
        path: 'navbar',
        component: NavbarComponent

    },
    {
        path: 'login',
        component: LoginComponent

    },
    {
        path: 'register',
        component: RegisterComponent

    },
    {
        path: 'footer',
        component: FooterComponent

    },
];
