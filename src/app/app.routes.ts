import { Routes } from '@angular/router';
import { LibroComponent } from './pages/libro/libro.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { EjercicioParcialComponent } from './pages/ejercicio-parcial/ejercicio-parcial.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'libros', component: LibroComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'ejercicio-parcial', component: EjercicioParcialComponent },
  { path: 'acerca-de', component: AcercaDeComponent }
];
