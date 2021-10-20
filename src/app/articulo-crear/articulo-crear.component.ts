import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Articulo } from '../models/articulo';
import { User } from '../models/user';
import { ArticulosService } from '../services/articulos.service';

@Component({
  selector: 'app-articulo-crear',
  templateUrl: './articulo-crear.component.html',
  styleUrls: ['./articulo-crear.component.scss']
})
export class ArticuloCrearComponent implements OnInit {
  public usuarios:Array<User> = new Array<User>();
  formulario!: FormGroup;
  constructor(public articulosService:ArticulosService, public formBuilder:FormBuilder,private ruta:Router) { }
 

  ngOnInit(): void {
    this.definirReglasFormulario();
    this.articulosService.usuarios().subscribe((consumoUsuario)=>{
      this.usuarios = consumoUsuario;
    });
  };

  definirReglasFormulario(){
    this.formulario = this.formBuilder.group({
      title:['', Validators.compose([Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)])],
      body:['',Validators.compose([Validators.required,Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)])],
      userId:['',Validators.required]
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
}
