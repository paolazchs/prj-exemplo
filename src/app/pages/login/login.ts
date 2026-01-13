import { Component } from '@angular/core';
import { LoginLayout } from '../../components/login-layout/login-layout';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimeiroInput } from '../../components/primeiro-input/primeiro-input';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login';
import { ToastrService } from 'ngx-toastr';


  interface LoginForm {
      email: FormControl;
      password: FormControl;
  }

  
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    LoginLayout,
    ReactiveFormsModule,
    PrimeiroInput
  ],
  providers: [
    LoginService // Importa o serviço de login para autenticação
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  // Declara uma propriedade do tipo FormGroup para representar o formulário de login
  loginForm !: FormGroup<LoginForm>;

constructor(
  private router: Router, // Injeta o serviço Router para navegar ate a outra pag 
  private loginService: LoginService, // Injeta o serviço de login para autenticação
  private toastService: ToastrService // Injeta o serviço de notificação para exibir mensagens ao usuário
  ) {
  
  // Inicializa o formulário usando FormGroup com dois controles (campos)
  this.loginForm = new FormGroup({
    
    // Campo "email": começa vazio ('') e possui duas validações:
    // - Validators.required → torna o campo obrigatório
    // - Validators.email → exige um formato de email válido
     email: new FormControl('', [Validators.required, Validators.email]),
    // Campo "password": também começa vazio e possui duas validações:
    // - Validators.required → campo obrigatório
    // - Validators.minLength(6) → exige no mínimo 6 caracteres
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

    submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastService.success('Login realizado com sucesso!'),
      // Exibe uma mensagem de sucesso quando o login é bem-sucedido
      error: () => this.toastService.error('Erro ao realizar login. Tente novamente mais tarde!')
      // Exibe uma mensagem de erro se o login falhar
    });
    }

    
    navigate () {
      this.router.navigate(['/cadastro']);  
      // Navega para a rota de cadastro
    }



}