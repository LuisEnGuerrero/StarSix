import { Injectable } from '@angular/core';
import { Institucion } from '../modelos/institucion'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstitucionService {

  url = 'https://starsixapirest.herokuapp.com/'
  constructor(private http: HttpClient) { }

  cargarInstituciones(): Observable<any> {
    return this.http.get('https://starsixapirest.herokuapp.com/api/instituciones/')
  }

  cargarInstitucion(id: string| null): Observable<any> {
    
    return this.http.get('https://starsixapirest.herokuapp.com/api/instituciones/'+id)
  }

  guardarNuevaInstitucion(institucion:Institucion): Observable<any> {
    return this.http.post('https://starsixapirest.herokuapp.com/api/instituciones/', institucion)
  }

  actualizarInstitucion(institucion:Institucion): Observable<any> {
    return this.http.put('https://starsixapirest.herokuapp.com/api/instituciones/'+institucion._id, institucion)
  }

  eliminarInstitucion(id: string): Observable<any> {
    return this.http.delete('https://starsixapirest.herokuapp.com/api/instituciones/'+id)
  }
}
