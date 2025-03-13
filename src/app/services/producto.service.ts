import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { Observable } from 'rxjs';
import { collection, collectionData, Firestore, doc, deleteDoc } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private db: Firestore) {}

  // Obtener productos de la base de datos
  getProductos(): Observable<Producto[]> {
    const productosCollection = collection(this.db, 'productos');  // Referencia a la colección de productos en Firebase
    return collectionData(productosCollection, { idField: 'id' }).pipe(
      map((productos: any[]) => {
        // Mapeamos los productos para asegurarnos de que el tipo Producto sea respetado
        return productos.map(producto => {
          return {
            id: producto.id,          // Asignamos el ID del documento de Firebase
            nombre: producto.nombre,  // Asignamos el nombre
            precio: producto.precio,  // Asignamos el precio
            descripcion: producto.descripcion,  // Asignamos la descripción
          };
        });
      })
    );
  }

  // Agregar producto
  agregarProducto(producto: Producto) {
    // Implementar lógica para agregar producto a la base de datos si es necesario
  }

  // Modificar producto
  modificarProducto(producto: Producto) {
    // Implementar lógica para modificar producto en la base de datos si es necesario
  }

  // Eliminar producto
  eliminarProducto(producto: Producto) {
    // Aquí eliminamos el producto de Firebase usando el ID
    const productoDocRef = doc(this.db, 'productos', producto.id);
    return deleteDoc(productoDocRef); // Eliminar el documento de Firebase
  }
}
