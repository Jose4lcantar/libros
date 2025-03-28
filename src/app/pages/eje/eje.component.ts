import { Component } from '@angular/core';
import { juegos } from '../../models/juegos.model';
import { ServicesService } from '../../services/services.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { producto } from '../../models/producto.model';


@Component({
  selector: 'app-ejercicio1erparcial',
  imports: [FormsModule],
  templateUrl: './eje.component.html',
  styleUrl: './eje.component.css'
})
export class EjeComponent {
  
  juegos: any;
  juego = new juegos();

  constructor(private serviceService: ServicesService){
    this.getJuego();
  }

  async getJuego(): Promise<void>{
    this.juegos = await firstValueFrom(this.serviceService.getJuego());
  }

  async insertarJuego(){
    await this.serviceService.agregarJuego(this.juego);
    this.getJuego();
    this.juego = new juegos();
  }

  selectJuego(juegoSeleccionada: juegos){
    this.juego = juegoSeleccionada;
  }

  async updateJuego(){
    await this.serviceService.modificarJuego(this.juego);
    this.juego = new juegos(); 
    this.getJuego();
  }

  async deleteJuego(){
    await this.serviceService.eliminarJuego(this.juego);
    this.juego = new juegos();
    this.getJuego();
  }
}
