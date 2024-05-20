import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContatosComponent} from "./contatos/contatos.component";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {AuthGuard} from "./guard/AuthGuard";

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent, canActivate: [AuthGuard]},
  { path: 'contatos', component: ContatosComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/contatos', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
