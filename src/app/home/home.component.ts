import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo';
import { ArticulosService } from '../services/articulos.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  articulos: Array<Articulo> = new Array<Articulo>();
  constructor(public usuarioInyectado:UsuarioService,public articuloInyectado:ArticulosService, private Ruta: Router ) {  }


  ngOnInit(): void {
    this.articuloInyectado.leerNoticias().subscribe((articuloInyectado)=>{
      this.articulos = articuloInyectado;
    });
  }

  irAlDetalle(articulo:Articulo){
    this.articuloInyectado.articulo = articulo;
    this.Ruta.navigateByUrl('/articulo-detalle');
  }


}
