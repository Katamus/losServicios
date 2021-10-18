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
  constructor(public usuarioInyectado:UsuarioService,public ArticuloInyectado:ArticulosService, private Ruta: Router ) {  }

  ngOnInit(): void {
    this.articulos.push({
      titulo:'Curso de Net Core',
      descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum tempus metus nec rutrum. Vivamus non luctus dolor, vel tristique massa. Nam iaculis mauris tortor, ut facilisis sem aliquet eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo condimentum diam at blandit. Morbi non nulla est. Quisque aliquet lacus at sem rhoncus pretium. Morbi posuere felis at ligula placerat tincidunt. Aliquam vel molestie nunc, eu dignissim lacus.',
      fecha: new Date(),
      usuario: ` Hola: ${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido} `
      },{
        titulo:'Curso de Angular',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum tempus metus nec rutrum. Vivamus non luctus dolor, vel tristique massa. Nam iaculis mauris tortor, ut facilisis sem aliquet eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo condimentum diam at blandit. Morbi non nulla est. Quisque aliquet lacus at sem rhoncus pretium. Morbi posuere felis at ligula placerat tincidunt. Aliquam vel molestie nunc, eu dignissim lacus.',
        fecha: new Date('04/25/2019'),
        usuario: ` Hola: ${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido} `
      },{
        titulo:'Curso de Flutter',
        descripcion:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum tempus metus nec rutrum. Vivamus non luctus dolor, vel tristique massa. Nam iaculis mauris tortor, ut facilisis sem aliquet eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo condimentum diam at blandit. Morbi non nulla est. Quisque aliquet lacus at sem rhoncus pretium. Morbi posuere felis at ligula placerat tincidunt. Aliquam vel molestie nunc, eu dignissim lacus.',
        fecha: new Date('05/10/2019'),
        usuario: ` Hola: ${this.usuarioInyectado.usuario.nombre} ${this.usuarioInyectado.usuario.apellido} `
      }
    )
  }

  irAlDetalle(articulo:Articulo){
    this.ArticuloInyectado.articulo = articulo;
    this.Ruta.navigateByUrl('/articulo-detalle');

  }

}
