import { Injectable } from '@angular/core';
import { Estudiante } from '../modelos/estudiante';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpClient) { }

  cargarEstudiantes(): Observable<any> {
    return this.http.get('https://starsixapirest.herokuapp.com/api/estudiantes/')
  }

  cargarEstudiante(id: string | null): Observable<any> {
    return this.http.get('https://starsixapirest.herokuapp.com/api/estudiantes/'+id)
  }

  guardarNuevoEstudiante(estudiante: Estudiante): Observable<any> {
    return this.http.post('https://starsixapirest.herokuapp.com/api/estudiantes/', estudiante)
  }

  actualizarEstudiante(estudiante: Estudiante): Observable<any> {
    return this.http.put('https://starsixapirest.herokuapp.com/api/estudiantes/'+estudiante._id, estudiante)
  }

  eliminarEstudiante(id: string): Observable<any> {
    return this.http.delete('https://starsixapirest.herokuapp.com/api/estudiantes/'+id)
  }

}
