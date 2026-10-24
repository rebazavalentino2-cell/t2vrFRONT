import { Component } from '@angular/core';
import { AlumnoListComponent } from './components/alumno-list/alumno-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AlumnoListComponent],
  templateUrl: './app.html'
  // Quitamos styleUrl para evitar errores si el archivo scss está vacío
})
export class App {
  title = 'frontend-alumnos';
}