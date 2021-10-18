import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo';
import { User } from '../models/user';
import { ArticulosService } from '../services/articulos.service';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.scss']
})
export class ArticuloDetalleComponent implements OnInit {
  articulo: Articulo = new Articulo();
  user: User = new User();
   articulos: Array<Articulo> = new Array<Articulo>();
  constructor(public articuloInyectado:ArticulosService) { 
    this.articulo = articuloInyectado.articulo;
  }

  ngOnInit(): void {
    this.articuloInyectado.usuarioarticulo(this.articulo.userId).subscribe((result)=>{
      this.user = result;
    });

  }

}
