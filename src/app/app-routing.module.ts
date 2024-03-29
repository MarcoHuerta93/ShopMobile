import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'carrito', loadChildren: './carrito/carrito.module#CarritoPageModule' },
  { path: 'categorias', loadChildren: './categorias/categorias.module#CategoriasPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'ordenes', loadChildren: './ordenes/ordenes.module#OrdenesPageModule' },
  { path: 'ordenes-detalle', loadChildren: './ordenes-detalle/ordenes-detalle.module#OrdenesDetallePageModule' },
  { path: 'por-categorias', loadChildren: './por-categorias/por-categorias.module#PorCategoriasPageModule' },
  { path: 'producto', loadChildren: './producto/producto.module#ProductoPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
