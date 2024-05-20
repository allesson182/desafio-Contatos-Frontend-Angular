import {AfterContentInit, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HttpService} from "../service/http.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {EditDialogComponent} from "./edit-dialog/edit-dialog.component";
import {Contato} from "../entidades/contato";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";




@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {


  displayedColumns: string[] = ['nome','ativo', 'email', 'telefone', 'celular', 'dataCadastro', 'actions'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private httpService: HttpService, private snack:MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.httpService.getContacts().subscribe({ next: value => {
      this.dataSource = new MatTableDataSource<Contato>(value);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      },

      error: error => {
      console.error(error)
      this.snack.open('Erro ao carregar contatos', 'Fechar', {duration: 2000});
    }}
    );
  }


  toggleActive(contato: Contato) {
    if (contato.ativo)
      this.httpService.desativarContato(contato.id).subscribe({ next: value => {this.ngOnInit()} });
    else
      this.httpService.ativarContato(contato.id).subscribe({ next: value => {this.ngOnInit()} });
  }

  toggleFavorite(contato: Contato) {
    let id  = contato.id;
    if (!contato.favorito) {
      this.httpService.adicionarFavorito(id).subscribe({ next: value => {
      this.snack.open('Adicionado aos favoritos', 'Fechar', {duration: 2000});
      this.ngOnInit();
      },
      error: error => console.error(error)
    });}
    else {
      this.httpService.removerFavorito(id).subscribe({ next: value => {
        this.snack.open('Removido dos favoritos', 'Fechar', {duration: 2000});
        this.ngOnInit();
      },
        error: error => console.error(error)
      });
    }

  }

  delete(contato: Contato) {
    this.httpService.deleteContact(contato.id).subscribe({ next: value => {
      this.ngOnInit();
    },
      error: error => console.error(error)
    });
  }

  edit(contato: Contato) {
    this.dialog.open(EditDialogComponent, {data:
        new Contato(contato.id, contato.nome, contato.email, contato.telefone, contato.celular, contato.ativo, contato.favorito)});
  }
}
