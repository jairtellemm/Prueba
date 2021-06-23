import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaInstitucionesComponent } from './lista-instituciones/lista-instituciones.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/formulario"},
  {path: "formulario", component:FormularioComponent},
  {path: "lista", component:ListaInstitucionesComponent},
  {path: "**", redirectTo: "/formulario"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
