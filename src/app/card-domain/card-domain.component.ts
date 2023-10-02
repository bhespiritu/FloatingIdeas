import { Component } from '@angular/core';
import {
  CdkDragDrop, CdkDragEnter,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {IdeaData} from "../../../models/idea-data";

@Component({
  selector: 'app-card-domain',
  templateUrl: './card-domain.component.html',
  styleUrls: ['./card-domain.component.scss'],
})
export class CardDomainComponent {
  activeStreamCards = [''];
  shelfCards = [''];

  add(ideaId : string)
  {
    this.activeStreamCards.push(ideaId);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    console.log([this.activeStreamCards, '--', this.shelfCards]);
  }

  shelfEnter($event: CdkDragEnter<string>) {
    console.debug(["wuh?", $event])
  }
}
