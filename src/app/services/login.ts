
// concentra a chamada para o backend, envia os dados do backend e salva a resposta
// e também pode conter a lógica de autenticação 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  apiUrl: string = "http://localhost:8080/auth/login"
  constructor( private httpClient: HttpClient ) { }

  // Método para fazer login, enviando o nome e a senha para o backend
  // retorna um token de autenticação, deixando o usuário logado e permitundo o acesso a outras requisições
  login(email: string, password: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl, {email, password}).pipe(
      // salva o token e o nome do usuário no sessionStorage
      tap((value) => {
        sessionStorage.setItem("token", value.token)
        sessionStorage.setItem("name", value.name)
    })
    )
  }
}


