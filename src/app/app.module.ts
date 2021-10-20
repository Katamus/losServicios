import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioService } from './services/usuario.service';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { ArticulosService } from './services/articulos.service';
import { HttpClientModule } from '@angular/common/http';
import { ArticuloCrearComponent } from './articulo-crear/articulo-crear.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    HomeComponent,
    PerfilComponent,
    ArticuloDetalleComponent,
    ArticuloCrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    UsuarioService,
    ArticulosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
