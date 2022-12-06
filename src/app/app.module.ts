import { ModalF3EditoraModule } from './modals-f3/modal-f3-editora/modal-f3-editora.module';
import { AppConsultaReservaComponent } from './consultas-e-reservas/app-consulta-reserva/app-consulta-reserva.component';
import { AppConsultaItemComponent } from './consultas-e-reservas/app-consulta-item/app-consulta-item.component';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppBotaoSalvarExcluirComponent } from './botao-salvar-excluir/botao-salvar-excluir.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AutorDialogComponent } from './dialogs/autor-dialog/autor-dialog.component';
import { FormsModule } from '@angular/forms';
import { HeaderBibliotecaComponent } from './header-biblioteca/header-biblioteca.component';
import { AppCadastroAutorComponent } from './cadastros/app-cadastro-autor/app-cadastro-autor.component';
import { AppCadastroLeitorComponent } from './cadastros/app-cadastro-leitor/app-cadastro-leitor.component';
import { AppCadastroLocalComponent } from './cadastros/app-cadastro-local/app-cadastro-local.component';
import { AppCadastroItemAcervoComponent } from './cadastros/app-cadastro-item-acervo/app-cadastro-item-acervo.component';
import { AppCadastroSecaoComponent } from './cadastros/app-cadastro-secao/app-cadastro-secao.component';
import { AppCadastroEditoraComponent } from './cadastros/app-cadastro-editora/app-cadastro-editora.component';
import { ModalF3ItemModule } from './modals-f3/modal-f3-item/modal-f3-item.module';
import { ModalF3LeitorModule } from './modals-f3/modal-f3-leitor/modal-f3-leitor.module';
import { ModalF3LocalModule } from './modals-f3/modal-f3-local/modal-f3-local.module';
import { ModalF3AutorModule } from './modals-f3/modal-f3-autor/modal-f3-autor.module';
import { ModalF3SecaoModule } from './modals-f3/modal-f3-secao/modal-f3-secao.module';
import { AppReservaComponent } from './consultas-e-reservas/app-reserva/app-reserva.component';
import { EditoraDialogComponent } from './dialogs/editora-dialog/editora-dialog.component';
import { SecaoDialogComponent } from './dialogs/secao-dialog/secao-dialog.component';
import { ItemAcervoDialogComponent } from './dialogs/itemAcervo-dialog/itemAcervo-dialog.component';
import { LeitorDialogComponent } from './dialogs/leitor-dialog/leitor-dialog.component';
import { LocalDialogComponent } from './dialogs/local-dialog/local-dialog.component';
import { ReservaDialogComponent } from './dialogs/reserva-dialog/reserva-dialog.component';


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
        AppReservaComponent,
        AppConsultaItemComponent,
        AppConsultaReservaComponent,
        AutorDialogComponent,
        EditoraDialogComponent,
        SecaoDialogComponent,
        ItemAcervoDialogComponent,
        LeitorDialogComponent,
        LocalDialogComponent,
        ReservaDialogComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatRadioModule,
        MatMenuModule,
        MatDividerModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatNativeDateModule,
        ModalF3ItemModule,
        ModalF3LeitorModule,
        ModalF3LocalModule,
        ModalF3AutorModule,
        ModalF3SecaoModule,
        ModalF3EditoraModule,
        MatTableModule,
        HttpClientModule,
        MatDialogModule,
        MatTooltipModule,
        FormsModule,
    ]
})
export class AppModule { }
