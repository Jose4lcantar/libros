import { Component } from '@angular/core';
import { libro } from '../../models/libro.model';
import { ServicesService } from '../../services/services.service';
import {FormsModule} from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-libros',
  imports: [FormsModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.css'
})

export class LibrosComponent {

  libros: any;
  libro = new libro();
  
  constructor(private servicesService:ServicesService){
    this.getLibros();
  }

  async getLibros(): Promise<void>{
    this.libros = await firstValueFrom(this.servicesService.getLibros());
  }

  insertarLibro(){
    this.servicesService.aggregarLibro(this.libro);
    this.getLibros();
    this.libro = new libro();
  }

  selectLibro(libroSeleccionado: libro){
    this.libro = libroSeleccionado;
  }

  updateLibro(){
    this.servicesService.modificarLibro(this.libro);
    this.libro = new libro();
    this.getLibros();
  }

  deleteLibro(){
    this.servicesService.eliminarLibro(this.libro);
    this.libro = new libro();
    this.getLibros();
  }
}
