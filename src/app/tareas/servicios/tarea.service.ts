import { Injectable } from '@angular/core';
import { Tarea } from '../modelos/tarea';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http: HttpClient) { }

  cargarTareas(): Observable<any> {
    return this.http.get('https://starsixapirest.herokuapp.com/api/tareas/')
  }

  cargarTarea(id: string | null): Observable<any> {
    return this.http.get('https://starsixapirest.herokuapp.com/api/tareas/'+id)
  }

  guardarNuevaTarea(tarea:Tarea): Observable<any> {
    return this.http.post('https://starsixapirest.herokuapp.com/api/tareas/', tarea)
  }

  actualizarTarea(tarea:Tarea): Observable<any> {
    return this.http.put('https://starsixapirest.herokuapp.com/api/tareas/'+tarea._id, tarea)
  }

  eliminarTarea(id: string): Observable<any> {
    return this.http.delete('https://starsixapirest.herokuapp.com/api/tareas/'+id)
  }
}
