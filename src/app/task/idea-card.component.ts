import {Component, Input} from '@angular/core';
import { IdeaData } from '../../../models/idea-data';

@Component({
  selector: 'app-idea-card',
  templateUrl: './idea-card.component.html',
  styleUrls: ['./idea-card.component.scss'],
})
export class IdeaCardComponent {
  @Input()
  public taskData?: IdeaData;
}
