export class Contato {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  celular: string;
  ativo: boolean;
  favorito: boolean;

  constructor(id: number, nome: string, email: string, telefone: string, celular: string, ativo: boolean, favorito: boolean) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.celular = celular;
    this.ativo = ativo;
    this.favorito = favorito;
  }
}
