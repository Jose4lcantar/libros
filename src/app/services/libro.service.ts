import { Injectable, inject } from '@angular/core';
import { Libro } from '../models/libro.model';
import { collectionData, deleteDoc, Firestore } from '@angular/fire/firestore';
import { first } from 'rxjs';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';



@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private db : Firestore = inject(Firestore);

  constructor() { }

  //método que permita obtener el listado de los libros de la colección
  getLibros(){
    const librosCollection = collection(this.db, 'libros');
    return collectionData((librosCollection), {idField: 'id'}).pipe(first());

  }
  //para agregar un nuevo documento
agregarLibro(libro:Libro){
  const librosCollection = collection(this.db, 'libros');
  const libroData = {
    titulo: libro.titulo,
    autor: libro.autor,
    editorial: libro.editorial,
    anioPublicacion: libro.anioPublicacion
  };
  addDoc(librosCollection, libroData);
}

//método para modificar un documento
modificarLibro(libro:Libro){
  const documentRef = doc(this.db, 'libros', libro.id);
  updateDoc(documentRef, {
    titulo: libro.titulo,
    autor: libro.autor,
    editorial: libro.editorial,
    anioPublicacion: libro.anioPublicacion
  });
}

//métodopara borrar un documento
eliminarLibro(libro:Libro){
  const documentRef = doc(this.db, 'libros', libro.id);
  deleteDoc(documentRef);
}
}

