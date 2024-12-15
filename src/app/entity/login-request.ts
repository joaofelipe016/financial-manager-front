export class LoginRequest {

    scUsuario: string;
    scSenha: string;

    constructor(scUsuario: string, scSenha: string) {
        this.scUsuario = scUsuario;
        this.scSenha = scSenha;
    }
}
