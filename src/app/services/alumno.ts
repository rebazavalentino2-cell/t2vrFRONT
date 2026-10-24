import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../model/alumno_model';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private apiUrl = 'https://opulent-space-lamp-q7jv54q4447ph4jgq-8080.app.github.dev/api/alumnos';

  constructor(private http: HttpClient) { }

  listar(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.apiUrl);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}