import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  profissoes = ['Programador', 'Engenheiro', 'Outra'];

  salvar(form: NgForm) {
    console.log(form);
    console.log(form.value.nome);
  }

}
