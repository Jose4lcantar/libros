import { Component } from '@angular/core';
import { Producto } from '../../models/producto.model';
import { ProductoService } from '../../services/producto.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos: Producto[] = [];  // Aquí vamos a guardar la lista de productos obtenida
  producto: Producto = { id: '', nombre: '', precio: 0, descripcion: '' };

  constructor(private productoService: ProductoService) {
    this.getProductos();  // Llamamos al método para obtener los productos
  }

  getProductos() {
    this.productoService.getProductos().subscribe((productos: Producto[]) => {
      this.productos = productos;  // Guardamos la lista de productos en la propiedad productos
    });
  }

  insertarProducto() {
    this.productoService.agregarProducto(this.producto);
    this.resetProducto();  // Reinicia el formulario después de agregar el producto
  }

  selectProducto(productoSeleccionado: Producto) {
    this.producto = { ...productoSeleccionado };  // Rellenamos el formulario con el producto seleccionado
  }

  updateProducto() {
    this.productoService.modificarProducto(this.producto);
    this.resetProducto();  // Reinicia el formulario después de modificar el producto
  }

  deleteProducto() {
    this.productoService.eliminarProducto(this.producto);
    this.resetProducto();  // Reinicia el formulario después de eliminar el producto
  }

  private resetProducto() {
    this.producto = { id: '', nombre: '', precio: 0, descripcion: '' };  // Resetea el objeto producto
  }
}
