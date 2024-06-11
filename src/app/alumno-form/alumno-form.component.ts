import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-alumno-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent {
  nombre: string = '';
  apellido: string = '';
  dni: string = '';
  telefono: string = '';

  constructor(private alumnoService: AlumnoService) {}

  agregarAlumno(form: NgForm) {
    if (form.valid) {
      const nuevoAlumno = {
        nombre: this.nombre,
        apellido: this.apellido,
        dni: this.dni,
        telefono: this.telefono,
        avatarUrl: `https://api.multiavatar.com/${this.nombre}${this.apellido}.png`,
        presente: false
      };
      this.alumnoService.agregarAlumno(nuevoAlumno);
      form.resetForm();
    }
  }
}
