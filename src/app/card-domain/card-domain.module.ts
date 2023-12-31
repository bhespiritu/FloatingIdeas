import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDomainComponent } from './card-domain.component';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskCardModule } from '../task-card/task-card.module';
import { IdeaModule } from '../idea/idea.module';

@NgModule({
  declarations: [CardDomainComponent],
  imports: [
    CommonModule,
    MatCardModule,
    DragDropModule,
    TaskCardModule,
    IdeaModule,
  ],
  exports: [CardDomainComponent],
})
export class CardDomainModule {}
