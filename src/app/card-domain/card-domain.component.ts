import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  CdkDragEnter,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { IdeaData } from '../../../models/idea-data';
import { IdeaStateService } from '../idea/idea-state.service';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-card-domain',
  templateUrl: './card-domain.component.html',
  styleUrls: ['./card-domain.component.scss'],
})
export class CardDomainComponent implements OnInit, OnDestroy {
  activeStreamCards:string[]= [];
  shelfCards:string[] = [];

  public addIdeaIdEvent: Subject<string>;

  private sub?: Subscription;

  constructor(public ideaService: IdeaStateService) {
    this.addIdeaIdEvent = new Subject<string>();
  }

  ngOnInit(): void {
    this.sub = this.addIdeaIdEvent.subscribe((id) =>{
        console.log("recieved ID " + id)
        this.activeStreamCards.push(id);
    }


    );
  }

  ngOnDestroy(): void {
    this.addIdeaIdEvent.complete();
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

  shelfEnter($event: CdkDragEnter<string[]>) {
    console.debug(['wuh?', $event]);
  }
}
