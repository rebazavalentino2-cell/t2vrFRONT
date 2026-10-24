import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../model/alumno_model';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  // REEMPLAZA ESTA URL SI ESTÁS EN CODESPACES:
  // private apiUrl = 'https://tu-url-de-codespace-8080.app.github.dev/api/alumnos';
  private apiUrl = 'http://localhost:8080/api/alumnos';

  constructor(private http: HttpClient) { }

  // Método GET para listar
  listar(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.apiUrl);
  }

  // Método DELETE para eliminar
  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}