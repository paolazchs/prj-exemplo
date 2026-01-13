
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-primeiro-input', // Nome da tag usada para esse componente no HTML
  standalone: true,
  imports: [
    ReactiveFormsModule // Importa o módulo de formulários reativos do Angular
  ],          
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimeiroInput),
      multi: true // Permite que este componente seja usado como um provedor de valor para
    }
  ], // Lista de provedores de serviços, se necessário
  templateUrl: './primeiro-input.html', // Caminho para o HTML do componente
  styleUrls: ['./primeiro-input.scss']     // Caminho para os estilos do componente
})
export class PrimeiroInput implements ControlValueAccessor {
  // O decorador @Input() permite que o componente pai envie um valor para esse componente
  // Aqui, o valor recebido será armazenado na variável 'type'
  // Esse 'type' define o tipo do input (pode ser 'text', 'email' ou 'password')
  @Input() type: InputTypes = "text"; // Valor padrão é 'text'
  @Input() placeholder: string = "";
  @Input() label: string = "";
  @Input() inputName: string = "";

  value: string = ''
  onChange: any = () => {};
  onTouched: any = () => {};

  onInput(event: Event){
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
  }

  writeValue(obj: any): void {
      this.value = this.value;
  }

  registerOnChange(fn: any): void { 
      this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
      this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}
}