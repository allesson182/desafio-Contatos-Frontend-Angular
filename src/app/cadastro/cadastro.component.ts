import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import * as HTTPS from "https";
import {HttpService} from "../service/http.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  contactForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('',  Validators.email),
    celular: new FormControl('', Validators.required),
    telefone: new FormControl('')
  });

  constructor(private httpService: HttpService, private router: Router, private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.httpService.sendContact(this.contactForm.value).subscribe({
      next: data => this.router.navigate(['/contatos']),
      error: error => {
        if (error.status == 400)
          this._snackBar.open('Contato Já está cadastrado', 'Fechar', {duration: 2000});
        else
          this._snackBar.open('Erro ao cadastrar contato', 'Fechar', {duration: 2000});
      }
    });
  }
}
