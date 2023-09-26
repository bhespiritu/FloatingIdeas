import { Component } from '@angular/core';
import { CdkDragDrop, CdkDragStart } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {

  private x : number = 50;
  private y : number = 50;

  dragMoved(event: CdkDragDrop<undefined>) {
    this.x += event.distance.x;
    this.y += event.distance.y;

    console.log([this.x,this.y,event.dropPoint])

  }

  dragStarted($event: CdkDragStart) {

  }
}