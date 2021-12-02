import { Injectable } from '@angular/core';
import { Materia } from '../modelos/materia';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(private http: HttpClient) { }

  cargarMaterias(): Observable<any> {
    return this.http.get('https://starsixapirest.herokuapp.com/api/materias/')
  }

  cargarMateria(id: string| null): Observable<any> {
    return this.http.get('https://starsixapirest.herokuapp.com/api/materias/'+id)
  }

  guardarNuevaMateria(materia: Materia): Observable<any> {
    return this.http.post('https://starsixapirest.herokuapp.com/api/materias/', materia)
  }

  actualizarMateria(materia: Materia): Observable<any> {
    return this.http.put('https://starsixapirest.herokuapp.com/api/materias/'+materia._id, materia)
  }

  eliminarMateria(id: string): Observable<any> {
    return this.http.delete('https://starsixapirest.herokuapp.com/api/materias/'+id)
  }
}
