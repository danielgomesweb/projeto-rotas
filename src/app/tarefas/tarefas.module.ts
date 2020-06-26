import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService, TarefaConcluidaDirective } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';
//import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive';
import { TarefasRoutingModule } from './tarefas-routing.module';
import { TarefasRoutingComponent } from './tarefas-routing.component';



@NgModule({
  declarations: [ListarTarefaComponent, CadastrarTarefaComponent, EditarTarefaComponent, TarefaConcluidaDirective, TarefasRoutingComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TarefasRoutingModule
  ],
  providers:[
  	TarefaService
  ]
})
export class TarefasModule { }
