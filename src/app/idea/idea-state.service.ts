import { Injectable } from '@angular/core';
import { IdeaData } from '../../../models/idea-data';
import IpcRenderer = Electron.Renderer.IpcRenderer;
import { from, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IdeaStateService {
  private ipc?: IpcRenderer;

  constructor() {
    if (window.require) {
      this.ipc = window.require('electron/renderer').ipcRenderer;
    } else {
      console.log('Could not import IpcRenderer from Electron');
    }
  }

  requestIdeaState(id: string): Observable<IdeaData> {
    if (!this.ipc) {
      // Return an observable that immediately errors out if this.ipc is null or undefined
      return throwError(() => new Error('IPC is not available'));
    }
    const taskPromise: Promise<IdeaData> = this.ipc.invoke(
      'get-model',
      IdeaData.name,
      id,
    );

    return from(taskPromise);
  }

  requestRandomIdeaId(): Promise<string> {
    if (!this.ipc) {
      // Return an observable that immediately errors out if this.ipc is null or undefined
      throw new Error('IPC is not available');
    }

    return this.ipc.invoke('random-model-id') as Promise<string>;
  }
}
