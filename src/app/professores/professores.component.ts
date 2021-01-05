import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo  = 'Professores';
  modalRef: BsModalRef;
  public professorSelecionado: Professor;
  public professores = [
    { id: 1, nome: 'David',  disciplina: 'educação física' },
    { id: 2, nome: 'Hugo',   disciplina: 'matemática' },
    { id: 3, nome: 'Luíza',  disciplina: 'química' },
    { id: 4, nome: 'Laura',  disciplina: 'biologia' },
    { id: 5, nome: 'Marcos', disciplina: 'inglês' }
  ];

  professorSelect(professor: Professor) {
    this.professorSelecionado = professor;
  }

  voltar() {
    this.professorSelecionado = null;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  constructor( private modalService: BsModalService) {}

  ngOnInit() {
  }

}
