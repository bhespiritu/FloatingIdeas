import { Component, HostBinding, ViewChild } from '@angular/core';
import { CdkDragDrop, CdkDragStart } from '@angular/cdk/drag-drop';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {
  static nextId = 0;
  @HostBinding() id = 'task-card-' + (TaskCardComponent.nextId++).toString();

  @ViewChild('task') task?: TaskComponent;

  x = 50;
  y = 50;

  dragMoved(event: CdkDragDrop<undefined>) {
    this.x += event.distance.x;
    this.y += event.distance.y;

    console.log([this.x, this.y, event.dropPoint]);
  }

  dragStarted($event: CdkDragStart) {}
}
