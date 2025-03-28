import { Routes } from '@angular/router';
import { LibrosComponent } from './pages/libros/libros.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { AboutComponent } from './pages/about/about.component';
import { EjeComponent } from './pages/eje/eje.component';

export const routes: Routes = [
    {path: 'libros', component: LibrosComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'about', component: AboutComponent},
    {path: 'ejercicio', component: EjeComponent},
    {path: '**', redirectTo: 'libros'}
];
