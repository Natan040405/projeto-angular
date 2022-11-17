import { AppCadastroLocalComponent } from './app-cadastro-local/app-cadastro-local.component';
import { AppCadastroLeitorComponent } from './app-cadastro-leitor/app-cadastro-leitor.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppCadastroAutorComponent } from './app-cadastro-autor/app-cadastro-autor.component';
import { HeaderBibliotecaComponent } from './header-biblioteca/header-biblioteca.component';
import { AppCadastroItemAcervoComponent } from './app-cadastro-item-acervo/app-cadastro-item-acervo.component';
import { AppCadastroSecaoComponent } from './app-cadastro-secao/app-cadastro-secao.component';
import { AppCadastroEditoraComponent } from './app-cadastro-editora/app-cadastro-editora.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBibliotecaComponent,
    AppCadastroAutorComponent,
    AppCadastroLeitorComponent,
    AppCadastroLocalComponent,
    AppCadastroItemAcervoComponent,
    AppCadastroSecaoComponent,
    AppCadastroEditoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
