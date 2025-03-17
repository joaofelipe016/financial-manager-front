import { Injectable } from '@angular/core';
import axios from 'axios';
import { UsuarioDTO } from '../entity/usuario-dto';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl = 'http://localhost:8080';

  constructor() { }

  async cadastrar(usuarioDTO: UsuarioDTO ) {
    try {
      const response = await axios.post(this.apiUrl + '/usuario', usuarioDTO);
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer login ', error);
      throw new Error('Erro na requisição');
    }
  }
}
