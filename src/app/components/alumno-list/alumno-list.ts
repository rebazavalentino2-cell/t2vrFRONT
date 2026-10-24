import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngIf y *ngFor
import { AlumnoService } from '../../services/alumno';
import { Alumno } from '../../model/alumno_model';

@Component({
  selector: 'app-alumno-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alumno-list.html',
  styleUrl: './alumno-list.scss'
})
export class AlumnoListComponent implements OnInit {
  alumnos: Alumno[] = [];
  mensajeError: string = '';

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.cargarAlumnos();
  }

  cargarAlumnos(): void {
    this.alumnoService.listar().subscribe({
      next: (data) => {
        this.alumnos = data;
        this.mensajeError = '';
      },
      error: (err) => {
        this.mensajeError = 'Error al cargar los datos. ¿El backend está encendido?';
        console.error(err);
      }
    });
  }

  eliminarAlumno(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este alumno?')) {
      this.alumnoService.eliminar(id).subscribe({
        next: () => {
          // Si la API responde 204, volvemos a cargar la lista para actualizar la tabla
          this.cargarAlumnos();
        },
        error: (err) => {
          this.mensajeError = 'Error al eliminar el alumno.';
          console.error(err);
        }
      });
    }
  }
}