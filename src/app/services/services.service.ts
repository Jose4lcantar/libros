import { inject, Injectable } from '@angular/core';
import { libro } from '../models/libro.model';
import { producto } from '../models/producto.model';
import { collection, collectionData, deleteDoc, doc, Firestore} from '@angular/fire/firestore';
import { first } from 'rxjs';
import { addDoc, updateDoc } from '@angular/fire/firestore';
import { juegos } from '../models/juegos.model';


@Injectable({
  providedIn: 'root'
})

export class ServicesService {

  private db: Firestore = inject(Firestore);

  constructor() { }

  getLibros(){
    const librosCollection = collection(this.db, 'libros');
    return collectionData((librosCollection), {idField: 'id'})
    .pipe(first());
  }

  aggregarLibro(libro:libro){
    const librosCollection = collection(this.db, 'libros');
    const librosData = {
      titulo: libro.titulo,
      autor: libro.autor,
      editorial: libro.editorial,
      anio: libro.anio
    }
    addDoc(librosCollection, librosData);
  }

  modificarLibro(libro: libro) {
    if (!libro.id) {
        console.error("Error: El libro no tiene un ID válido.");
        return;
    }
    const documentRef = doc(this.db, 'libros', libro.id); 
    updateDoc(documentRef, {
        titulo: libro.titulo,
        autor: libro.autor,
        editorial: libro.editorial,
        anio: libro.anio
    }).catch(error => console.error("Error al modificar libro:", error));
  }
  
  eliminarLibro(libro: libro) {
    if (!libro.id) {
        console.error("Error: El libro no tiene un ID válido.");
        return;
    }
    const documentRef = doc(this.db, 'libros', libro.id); 
    deleteDoc(documentRef)
        .then(() => console.log("Libro eliminado con éxito"))
        .catch(error => console.error("Error al eliminar libro:", error));
      }

  getProductos(){
    const productosCollection = collection(this.db, 'productos');
    return collectionData((productosCollection), {idField: 'id'})
    .pipe(first());
  }

  async aggregarProducto(producto:producto){
    const productosCollection = collection(this.db, 'productos');
    const productosData = {
      Cantidad: producto.Cantidad,
      Descripcion: producto.Descripcion,
      Precio: producto.Precio
    }
    await addDoc(productosCollection, productosData);
  }

  modificarProducto(producto: producto){
    if(!producto.id) {
      console.error("Error: El prducto no tiene un id valido");
      return;
    }
    const documentRef = doc(this.db, 'productos', producto.id);
    updateDoc(documentRef, {
      Cantidad: producto.Cantidad,
      Descripcion: producto.Descripcion,
      Precio: producto.Precio
    }).catch(error => console.error("Error al modificar el producto", error));
  }

  eliminarProducto(producto: producto){
    if (!producto.id) {
      console.error("Error: El libro no tiene un ID válido.");
      return;
  }
  const documentRef = doc(this.db, 'productos', producto.id); 
  deleteDoc(documentRef)
      .then(() => console.log("Libro eliminado con éxito"))
      .catch(error => console.error("Error al eliminar producto:", error));
  }
  //*FIN METODOS PARA PRODUCTOS -----------------------------------------------------------------
 

  //juegos
  getJuego(){
    const juegosCollection = collection(this.db, 'juegos');
    return collectionData((juegosCollection), {idField: 'id'})
    .pipe(first());
  }

  async agregarJuego(juegos: juegos){
    const juegosCollection = collection(this.db, 'juegos');
    const juegoData = {
      nombre: juegos.nombre,
      precio: juegos.precio,
      descripcion: juegos.descripcion
    }
    await addDoc (juegosCollection, juegoData);
  }

  modificarJuego(juegos: juegos){
    if(!juegos.id){
      console.error("Error: EL producto tiene un id invalido");
      return;
    }
    const documentRef = doc(this.db, 'juegos', juegos.id);
    updateDoc(documentRef, {
      nombre: juegos.nombre,
      precio: juegos.precio,
      descripcion: juegos.descripcion
    }).catch(error => console.error("Error al modificar el producto"));
  }
  
  eliminarJuego(juegos: juegos){
    if(!juegos.id){
      console.error("Error: EL producto tiene un id invalido");
      return;
    }
    const documentRef = doc(this.db, 'juegos', juegos.id);
    deleteDoc(documentRef)
    .then(() => console.log("Juego eliminado correctamente"))
    .catch(error => console.error("Error al eliminar el producto"));
  }
}
