import { Injectable } from '@angular/core';
import { TaskData } from '../../../models/task-data';

@Injectable({
  providedIn: 'root',
})
export class TaskStateService {
  constructor() {}

  states = new Map<string, TaskData>();

  setState(id: string, state: TaskData) {
    this.states.set(id, state);
  }

  getState(id: string): TaskData | null {
    return this.states.get(id) || null;
  }
}
