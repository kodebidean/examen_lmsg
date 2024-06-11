import { Routes } from '@angular/router';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';
import { AlumnoListaComponent } from './alumno-lista/alumno-lista.component';

export const routes: Routes = [
  { path: '', component: AlumnoFormComponent },
  { path: 'lista', component: AlumnoListaComponent }
];
