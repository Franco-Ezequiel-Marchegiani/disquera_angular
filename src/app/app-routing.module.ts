import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrosComponent } from './pages/registros/registros.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
/*import { ComponenteComponent } from './discos/componente/componente.component';*/


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"", component:RegistrosComponent},
  {path:"producto/:id", component:DetalleComponent}
/*  {path:"discos", component:ComponenteComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
