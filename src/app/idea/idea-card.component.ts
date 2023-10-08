import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { IdeaData } from '../../../models/idea-data';
import { IdeaStateService } from './idea-state.service';
import { from, Subscription } from 'rxjs';

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.scss'],
})
export class IdeaCardComponent implements OnChanges, OnDestroy {
  @Input()
  public taskId?: string;

  public taskData?: IdeaData;

  private sub?: Subscription;

  constructor(private ideaService: IdeaStateService) {}

  private refreshTask() {
    console.log("building card " + (this.taskId ?? "BROKEN"))
    if (this.taskId) {
      if (this.sub) {
        this.sub.unsubscribe();
      }
      console.log("requesting " + this.taskId)
      this.sub = this.ideaService
        .requestIdeaState(this.taskId)
        .subscribe((data) => (this.taskData = data));
    } else {
      this.taskData = undefined;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.taskId) {
      this.refreshTask();
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
