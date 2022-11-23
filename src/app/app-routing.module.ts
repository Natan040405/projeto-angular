import { AppCadastroAutorComponent } from './app-cadastro-autor/app-cadastro-autor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCadastroLocalComponent } from './app-cadastro-local/app-cadastro-local.component';
import { AppCadastroLeitorComponent } from './app-cadastro-leitor/app-cadastro-leitor.component';
import { AppCadastroItemAcervoComponent } from './app-cadastro-item-acervo/app-cadastro-item-acervo.component';
import { AppCadastroEditoraComponent } from './app-cadastro-editora/app-cadastro-editora.component';
import { AppCadastroSecaoComponent } from './app-cadastro-secao/app-cadastro-secao.component';
import { AppReservaComponent } from './app-reserva/app-reserva.component';
import { AppConsultaReservaComponent } from './app-consulta-reserva/app-consulta-reserva.component';
import { AppConsultaItemComponent } from './app-consulta-item/app-consulta-item.component';

const routes: Routes = [
  { path: 'app-cadastro-autor', component: AppCadastroAutorComponent},
  { path: 'app-cadastro-leitor', component: AppCadastroLeitorComponent},
  { path: 'app-cadastro-local', component: AppCadastroLocalComponent},
  { path: 'app-cadastro-item-acervo', component: AppCadastroItemAcervoComponent},
  { path: 'app-cadastro-editora', component: AppCadastroEditoraComponent},
  { path: 'app-cadastro-secao', component: AppCadastroSecaoComponent},
  { path: 'app-reserva', component: AppReservaComponent},
  { path: 'app-consulta-reserva', component: AppConsultaReservaComponent},
  { path: 'app-consulta-item', component: AppConsultaItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
