import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent  {

  @Input() funcionario: any;

  isAdmin(){
    return this.funcionario.nome.startsWith('T');
  }

  getEstiloCartao() {
    return {
      'border-width.px': this.funcionario.id,
      'background-color': this.funcionario.id % 2 === 0
          ? 'lightblue' : 'lightgreen'
    };
  }


}
