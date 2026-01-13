import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-layout',
  imports: [],
  templateUrl: './login-layout.html',
  styleUrls: ['./login-layout.scss']
})

// Serao exibidos na tela de login e poderao ser reutilizados com outros valores na tela de cadastro
export class LoginLayout {
  @Input() title: string = "";
  @Input() primaryButtonText: string = "";
  @Input() secondaryButtonText: string = "";

  // envia a função de submit para o componente pai ao clicar no botao 
  @Output("submit") onSubmit = new EventEmitter();
  @Output("navigate") onNavigate = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }

   navigate() {
    this.onNavigate.emit();
  }

























  
}
