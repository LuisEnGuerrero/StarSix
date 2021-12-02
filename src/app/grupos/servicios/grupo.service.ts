import { Injectable } from '@angular/core';
import { Grupo } from '../modelos/grupo';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private http: HttpClient) { }

  cargarGrupos(): Observable<any> {
    return this.http.get('https://starsixapirest.herokuapp.com/api/grupos/')
  }

  cargarGrupo(id: string| null): Observable<any> {
      return this.http.get('https://starsixapirest.herokuapp.com/api/grupos/'+id)
  }

  guardarNuevoGrupo(grupo: Grupo): Observable<any> {
    return this.http.post('https://starsixapirest.herokuapp.com/api/grupos/', grupo)
  }

  actualizarGrupo(grupo: Grupo): Observable<any> {
    return this.http.put('https://starsixapirest.herokuapp.com/api/grupos/'+grupo._id, grupo)
  }

  eliminarGrupo(id: string): Observable<any> {
    return this.http.delete('https://starsixapirest.herokuapp.com/api/grupos/'+id)
  }
}
