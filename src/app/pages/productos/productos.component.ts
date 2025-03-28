import { Component } from '@angular/core';
import { producto } from '../../models/producto.model';
import { ServicesService } from '../../services/services.service';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-productos',
  imports: [FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  productos: any;
  producto = new producto();

  constructor(private serviceService: ServicesService){
    this.getProductos();
  }

  async getProductos(): Promise<void>{
    this.productos = await firstValueFrom(this.serviceService.getProductos());
  }

  async insertarProducto(){
    await this.serviceService.aggregarProducto(this.producto);
    this.getProductos();
    this.producto = new producto();
  }

  selectProducto(productoSeleccionado: producto){
    this.producto = productoSeleccionado;
  }

  async updateProducto(){
    await this.serviceService.modificarProducto(this.producto);
    this.producto = new producto();
    this.getProductos();
  }

  async deleteProducto(){
    await this.serviceService.eliminarProducto(this.producto);
    this.producto = new producto();
    this.getProductos();
  }
}
