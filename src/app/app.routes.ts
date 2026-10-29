import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { SobreComponent } from './pages/sobre/sobre';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'TUXXA | Infraestrutura em Movimento - Cloud, Kubernetes & DevOps',
  },
  {
    path: 'sobre',
    component: SobreComponent,
    title: 'Sobre a TUXXA | Consultoria Cloud, Kubernetes, CI/CD & FinOps',
  },
  { path: '**', redirectTo: '' },
];
