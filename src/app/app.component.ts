import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  funcionarios = [];

  aoAdicionar(funcionario) {
    this.funcionarios.push(funcionario);

  }

  /*
  nome = 'Jaderson';
  nome2 = '';
  idade = 10;
  adicionado = false;
  ultimoId =0;
  funcionarios =[];


  getIdade() {
    return this.idade;
  }

  adicionar() {
    console.log(`Adicionando ${this.nome}`);
    const numero = Math.round(Math.random() * 100);
    this.nome = this.nome + numero;
  }

  adicionarDiretiva(){
    this.adicionado = true;
    this.funcionarios.push({
      id: ++this.ultimoId,
      nome: this.nome
    });
  }

  adicionarNome(nome: string) {
    this.nome2 = nome;
  }


  alterarNome(event: any) {
    //console.log(event);
    this.nome = event.target.value;
  }
  */
}
