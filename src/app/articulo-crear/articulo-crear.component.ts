import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from '../models/articulo';
import { User } from '../models/user';
import { ArticulosService } from '../services/articulos.service';

@Component({
  selector: 'app-articulo-crear',
  templateUrl: './articulo-crear.component.html',
  styleUrls: ['./articulo-crear.component.scss']
})
export class ArticuloCrearComponent implements OnInit {
  articulo:Articulo = new Articulo();
  public usuarios:Array<User> = new Array<User>();
  formulario!: FormGroup;
  constructor(public articulosService:ArticulosService, public formBuilder:FormBuilder,private ruta:Router,private rutaActiva:ActivatedRoute) { }
  esNuevo:boolean = true;

  ngOnInit(): void {
    this.esNuevo = JSON.parse(this.rutaActiva.snapshot.params.esNuevo);
    this.definirReglasFormulario();
    
    this.articulosService.usuarios().subscribe((consumoUsuario)=>{
      this.usuarios = consumoUsuario;
    });

    if(!this.esNuevo){
      this.articulo = this.articulosService.articulo;
      this.formulario.patchValue({
        title:this.articulo.title,
        body:this.articulo.body,
        userId:this.articulo.userId,
        id:this.articulo.id
      })
    }
  };

  definirReglasFormulario(){
    this.formulario = this.formBuilder.group({
      title:['', Validators.compose([Validators.required])],
      body:['',Validators.compose([Validators.required])],
      userId:['',Validators.required],
      id:['']
    });
  }

  agregar(){
    let articulo:Articulo = this.formulario.value as Articulo;
    this.articulosService.crearArticulo(articulo).subscribe((articuloCreado)=>{
      this.articulosService.articulo = articuloCreado as Articulo;
      console.log("Ha registrado el primer articulo")
      this.formulario.reset();
    });
  }

  editar(){
    let articulo:Articulo = this.formulario.value as Articulo;
    this.articulosService.actualizarArticulo(articulo).subscribe((articuloRecibido)=>{
      console.log(articuloRecibido);
      console.log("se edito el articulo");
    })
  }
}
