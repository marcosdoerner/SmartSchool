import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  modalRef: BsModalRef;
  public alunoForm: FormGroup;
  public titulo  = 'Alunos';
  public alunoSelecionado: Aluno;
  public textSimple: string;
  public alunos = [
    { id: 1, nome: 'Marta' , sobrenome: 'Kent', telefone: 61995812829},
    { id: 2, nome: 'Paula' , sobrenome: 'Isabela', telefone: 61995813031},
    { id: 3, nome: 'Laura' , sobrenome: 'Antonia', telefone: 61995813233},
    { id: 4, nome: 'Luiza' , sobrenome: 'da Silva', telefone: 61995813435},
    { id: 5, nome: 'Lucas' , sobrenome: 'Ferreira', telefone: 61995813637},
    { id: 6, nome: 'Pedro' , sobrenome: 'Pedreira', telefone: 61995813839},
    { id: 7, nome: 'Paulo' , sobrenome: 'Madeira', telefone: 61995814041}
  ];



  constructor(private fb: FormBuilder,
              private  modalService: BsModalService) {

    this.criarForm();
   }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
}


  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSubmit() {
    console.log(this.alunoForm.value);
  }
  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar() {
    this.alunoSelecionado = null;
  }



}
