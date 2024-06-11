import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoFormComponent } from './alumno-form/alumno-form.component';
import { AlumnoListaComponent } from './alumno-lista/alumno-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AlumnoFormComponent, AlumnoListaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestion-alumnos';
}
