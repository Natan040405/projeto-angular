import { AppCadastroAutorComponent } from './app-cadastro-autor/app-cadastro-autor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCadastroLocalComponent } from './app-cadastro-local/app-cadastro-local.component';
import { AppCadastroLeitorComponent } from './app-cadastro-leitor/app-cadastro-leitor.component';
import { AppCadastroItemAcervoComponent } from './app-cadastro-item-acervo/app-cadastro-item-acervo.component';
import { AppCadastroEditoraComponent } from './app-cadastro-editora/app-cadastro-editora.component';
import { AppCadastroSecaoComponent } from './app-cadastro-secao/app-cadastro-secao.component';
import { AppConsultaReservaComponent } from './app-consulta-reserva/app-consulta-reserva.component';

const routes: Routes = [
  { path: 'app-cadastro-autor', component: AppCadastroAutorComponent},
  { path: 'app-cadastro-leitor', component: AppCadastroLeitorComponent},
  { path: 'app-cadastro-local', component: AppCadastroLocalComponent},
  { path: 'app-cadastro-item-acervo', component: AppCadastroItemAcervoComponent},
  { path: 'app-cadastro-editora', component: AppCadastroEditoraComponent},
  { path: 'app-cadastro-secao', component: AppCadastroSecaoComponent},
  { path: 'app-consulta-reserva', component: AppConsultaReservaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
