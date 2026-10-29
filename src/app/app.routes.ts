import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { SobreComponent } from './pages/sobre/sobre';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Tuxxa' },
  { path: 'sobre', component: SobreComponent, title: 'Tuxxa' },
  { path: '**', redirectTo: '' },
];
