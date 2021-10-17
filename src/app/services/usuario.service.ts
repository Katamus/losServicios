import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuario:Usuario = new Usuario();
  constructor() {
    this.usuario.usuarioID =1;
    this.usuario.nombre = "Tomás";
    this.usuario.apellido = 'Garay';
  }
}
