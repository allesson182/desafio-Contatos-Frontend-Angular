import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContatosComponent } from './contatos/contatos.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {HttpService} from "./service/http.service";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import { EditDialogComponent } from './contatos/edit-dialog/edit-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ContatosComponent,
    EditDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NgbModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
