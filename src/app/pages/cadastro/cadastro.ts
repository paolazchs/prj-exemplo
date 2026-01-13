import { Component } from '@angular/core';
import { LoginLayout } from '../../components/login-layout/login-layout';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimeiroInput } from '../../components/primeiro-input/primeiro-input';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login';
import { ToastrService } from 'ngx-toastr';

  interface CadastroForm {
    name: FormControl;
    email: FormControl;
    password: FormControl;
    passwordConfirmation: FormControl;
  }


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    LoginLayout,
    ReactiveFormsModule,
    PrimeiroInput
  ],
  providers: [
    LoginService // Importa o serviço de login para autenticação
  ],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss'
})
export class CadastroComponent {
  // Declara uma propriedade do tipo FormGroup para representar o formulário de login
  cadastroForm !: FormGroup<CadastroForm>;

constructor(
  private router: Router, // Injeta o serviço Router para navegar ate a outra pag 
  private loginService: LoginService, // Injeta o serviço de login para autenticação
  private toastService: ToastrService // Injeta o serviço de notificação para exibir mensagens ao usuário
  ) {
  
  // Inicializa o formulário usando FormGroup com dois controles (campos)
  this.cadastroForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    // Campo "email": começa vazio ('') e possui duas validações:
    // - Validators.required → torna o campo obrigatório
    // - Validators.email → exige um formato de email válido
     email: new FormControl('', [Validators.required, Validators.email]),
    // Campo "password": também começa vazio e possui duas validações:
    // - Validators.required → campo obrigatório
    // - Validators.minLength(6) → exige no mínimo 6 caracteres
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

    submit () {
    this.loginService.login(this.cadastroForm.value.email, this.cadastroForm.value.password).subscribe({
      next: () => this.toastService.success('Cadastro realizado com sucesso!'),
      // Exibe uma mensagem de sucesso quando o login é bem-sucedido
      error: () => this.toastService.error('Erro ao realizar cadastro. Tente novamente mais tarde!')
      // Exibe uma mensagem de erro se o login falhar
    });
    }

    
    navigate () {
      this.router.navigate(['/login']);  
      // Navega para a rota de cadastro
    }



}