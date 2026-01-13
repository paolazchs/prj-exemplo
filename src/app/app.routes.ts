import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { CadastroComponent } from './pages/cadastro/cadastro';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    }
]