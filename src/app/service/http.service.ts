import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {animate} from "@angular/animations";
import {map, Observable} from "rxjs";
import {Contato} from "../entidades/contato";
import {environment} from "../../environments/environment";
@Injectable()
export class HttpService {

  apiUrl = environment.apiUrl;


  constructor(private http: HttpClient) {
  }

  sendContact(contato: Contato|any) {
    let contatoReq = {
      nome: contato.nome,
      email: contato.email,
      celular: contato.celular,
      telefone: contato.telefone,
      favorito: false,
      ativo: true
    }
    return this.http.post(this.apiUrl+'/contato/cadastrar', contatoReq);
  }
  getContacts(): Observable<Contato[]> {
    return  this.http.get(this.apiUrl+"/contato/todos").pipe(map((response: any) => response));
  }

  updateContact(contato:any) {
     return this.http.put(this.apiUrl+'/contato/atualizar', contato);
  }

  deleteContact(id: number) {
    return this.http.delete(this.apiUrl+"/deletar",{ headers: {'id': id.toString()}} );
  }

  adicionarFavorito(id: number) {
    return this.http.post(this.apiUrl+"/favorito/adicionar", null, {headers: {'id': id.toString()}});
  }

  removerFavorito(id: number) {
    return this.http.post(this.apiUrl+"/favorito/remover", null, {headers: {'id': id.toString()}});
  }
  ativarContato(id: number) {
    return this.http.post(this.apiUrl+'/contato/ativar', null, {headers: {'id': id.toString()}});
  }
  desativarContato(id: number) {
    return this.http.post(this.apiUrl+'/contato/desativar', null, {headers: {'id': id.toString()}});
  }
}
