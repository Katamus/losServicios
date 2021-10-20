import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../models/articulo';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {
  url:string = 'https://jsonplaceholder.typicode.com';
  articulo: Articulo = new Articulo();
  constructor(private http: HttpClient) {}

  public leerNoticias(): Observable<Articulo[]>
  {
    return this.http.get<Array<Articulo>>( this.url+'/posts');
  }

  public usuarioarticulo(userId:number):Observable<User>{
    return this.http.get<User>(this.url+'/users/'+userId);
  }

  public crearArticulo(articulo:Articulo):Observable<Articulo>{
    return this.http.post<Articulo>(this.url+'/posts',articulo);
  }

  public usuarios():Observable<Array<User>>{
    return this.http.get<User[]>(this.url+'/users');
  }

}
