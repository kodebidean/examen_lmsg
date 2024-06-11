import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private alumnos: any[] = [];

  agregarAlumno(alumno: any) {
    this.alumnos.push(alumno);
  }

  obtenerAlumnos() {
    return this.alumnos;
  }

  eliminarAlumno(alumno: any) {
    this.alumnos = this.alumnos.filter(a => a !== alumno);
  }

  marcarPresente(alumno: any) {
    alumno.presente = true;
  }
}
