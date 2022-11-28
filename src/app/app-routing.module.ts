import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConsultaReservaComponent } from './consultas-e-reservas/app-consulta-reserva/app-consulta-reserva.component';
import { AppConsultaItemComponent } from './consultas-e-reservas/app-consulta-item/app-consulta-item.component';
import { AppCadastroAutorComponent } from './cadastros/app-cadastro-autor/app-cadastro-autor.component';
import { AppCadastroLeitorComponent } from './cadastros/app-cadastro-leitor/app-cadastro-leitor.component';
import { AppCadastroLocalComponent } from './cadastros/app-cadastro-local/app-cadastro-local.component';
import { AppCadastroItemAcervoComponent } from './cadastros/app-cadastro-item-acervo/app-cadastro-item-acervo.component';
import { AppCadastroEditoraComponent } from './cadastros/app-cadastro-editora/app-cadastro-editora.component';
import { AppCadastroSecaoComponent } from './cadastros/app-cadastro-secao/app-cadastro-secao.component';
import { AppReservaComponent } from './consultas-e-reservas/app-reserva/app-reserva.component';

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
