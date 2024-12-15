import { Injectable } from '@angular/core';
import axios from 'axios';
import { LoginRequest } from '../entity/login-request';
import { LoginResponse } from '../entity/login-reponse';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';

  constructor(private localStorageService: LocalStorageService) {}

  async login(loginRequest: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await axios.post(this.apiUrl + '/login', loginRequest);
      console.log('>>>>>>>>>>>>>>>>>>>>> ', response.data.accessToken);
      this.localStorageService.setItem(
        'accessToken',
        response.data.accessToken
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao fazer login ', error);
      throw new Error('Erro na requisição');
    }
  }
}
