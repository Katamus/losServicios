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

    let articulo = new Articulo();
    articulo.userId = 4;
    articulo.title="Elemento de prueba";
    articulo.body="Este elemento se creo al cargar la pagina";
    
    //se acomoda para emular que se creo el articulo netamente visual
    console.log(this.articuloInyectado.articulo);
    
    if(this.articuloInyectado.articulo.id != null ){
      this.articulos.push(this.articuloInyectado.articulo);
      this.articuloInyectado.articulo = new Articulo();
    }
    
  }

  irAlDetalle(articulo:Articulo){
    this.articuloInyectado.articulo = articulo;
    this.Ruta.navigateByUrl('/articulo-detalle');
  }


  borrar(id:number){
    this.articuloInyectado.borrarArticulo(id).subscribe((datos)=>{
      console.log(datos);
      console.log("Eliminado correctamente");
    });
  }

  actualizar(articulo:Articulo){
    this.articuloInyectado.articulo = articulo;
    this.Ruta.navigateByUrl('/articulo-crear/false');

  }

}
