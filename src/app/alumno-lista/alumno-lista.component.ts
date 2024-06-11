import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-alumno-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alumno-lista.component.html',
  styleUrls: ['./alumno-lista.component.css']
})
export class AlumnoListaComponent implements OnInit {
  alumnos: any[] = [];

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.alumnos = this.alumnoService.obtenerAlumnos();
  }

  eliminarAlumno(alumno: any) {
    this.alumnoService.eliminarAlumno(alumno);
    this.alumnos = this.alumnoService.obtenerAlumnos();
  }

  marcarPresente(alumno: any) {
    this.alumnoService.marcarPresente(alumno);
  }
}
