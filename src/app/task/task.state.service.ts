import { Injectable } from '@angular/core';
import { TaskData } from '../../../models/task-data';
import IpcRenderer = Electron.Renderer.IpcRenderer;
import {of} from "rxjs";


@Injectable({
  providedIn: 'root',
})
export class TaskStateService {


  private ipc?: IpcRenderer;

  states = new Map<string, TaskData>();

  constructor() {
    if(window.require)
    {
      this.ipc = window.require('electron/renderer').ipcRenderer;
    } else {
      console.log("Could not import IpcRenderer from Electron")
    }
  }

  requestTaskState(id:string)
  {
    const taskPromise : Promise<TaskData> = this.ipc!.invoke("get-model",TaskData.name, id);

    return of(taskPromise)
  }

  setState(id: string, state: TaskData) {
    this.states.set(id, state);
  }

  getState(id: string): TaskData | null {
    return this.states.get(id) || this.requestTaskState(id);
  }
}
