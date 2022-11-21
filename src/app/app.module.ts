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
import {MatButtonModule} from '@angular/material/button';
import { AppBotaoSalvarExcluirComponent } from './botao-salvar-excluir/botao-salvar-excluir.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import { AppConsultaReservaComponent } from './app-consulta-reserva/app-consulta-reserva.component';
import {MatDividerModule} from '@angular/material/divider';




@NgModule({
  declarations: [
    AppComponent,
    HeaderBibliotecaComponent,
    AppCadastroAutorComponent,
    AppCadastroLeitorComponent,
    AppCadastroLocalComponent,
    AppCadastroItemAcervoComponent,
    AppCadastroSecaoComponent,
    AppCadastroEditoraComponent,
    AppBotaoSalvarExcluirComponent,
    AppConsultaReservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatRadioModule,
    MatMenuModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
