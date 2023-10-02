import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdeaCardComponent } from './idea-card.component';

@NgModule({
  declarations: [IdeaCardComponent],
  imports: [CommonModule],
  exports: [IdeaCardComponent],
})
export class IdeaModule {}
