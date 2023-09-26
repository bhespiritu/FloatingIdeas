import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from "./task-card.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatCardModule } from "@angular/material/card";



@NgModule({
  declarations: [TaskCardComponent],
  imports: [
    CommonModule,
    DragDropModule,
    MatCardModule
  ],
  exports: [
      TaskCardComponent
  ]
})
export class TaskCardModule { }
