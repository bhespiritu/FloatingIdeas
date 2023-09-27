import { Component, Input } from '@angular/core';
import { TaskData } from '../../../models/task-data';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input()
  public taskData?: TaskData;
}
