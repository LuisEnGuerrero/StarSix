import { Injectable } from '@angular/core';
import { Profesor } from '../modelos/profesor';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor(private http: HttpClient) { }

  cargarProfesores(): Observable<any> {
    return this.http.get('https://starsixapirest.herokuapp.com/api/profesores/')
  }

  cargarProfesor(id: string| null): Observable<any> {
    
    return this.http.get('https://starsixapirest.herokuapp.com/api/profesores/'+id)
  }

  guardarNuevoProfesor(profesor:Profesor): Observable<any> {
    return this.http.post('https://starsixapirest.herokuapp.com/api/profesores/', profesor)
  }

  actualizarProfesor(profesor:Profesor): Observable<any> {
    return this.http.put('https://starsixapirest.herokuapp.com/api/profesores/'+profesor._id, profesor)
  }

  eliminarProfesor(id: string): Observable<any> {
    return this.http.delete('https://starsixapirest.herokuapp.com/api/profesores/'+id)
  }
}
