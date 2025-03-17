import { Pessoa } from "./pessoa";

export class UsuarioDTO {

  scUsuario?: string;
  scSenha?: string;
  pessoa?: Pessoa;

  getScUsuario(): string | undefined {
    return this.scUsuario;
  }
  setScUsuario(scUsuario: string | undefined): void {
    this.scUsuario = scUsuario;
  }

  getScSenha(): string | undefined {
    return this.scSenha;
  }

  setScSenha(scSenha: string | undefined): void {
    this.scSenha = scSenha;
  }

  getPessoa(): Pessoa | undefined {
    return this.pessoa;
  }

  setPessoa(pessoa: Pessoa | undefined): void {
    this.pessoa = pessoa;
  }

}
