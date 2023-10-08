import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CardDomainComponent } from '../card-domain/card-domain.component';
import {
  from,
  interval,
  map,
  mergeMap,
  Observable,
  Subscription,
  take,
  toArray,
} from 'rxjs';
import { IdeaStateService } from '../idea/idea-state.service';
import { IdeaData } from '../../../models/idea-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('cardDomain')
  cardDomain?: CardDomainComponent;

  ideaRequestNum = 1;

  ideaSubscription?: Subscription;

  constructor(
    private router: Router,
    private ideaService: IdeaStateService,
  ) {}

  buildIdeaRequest(): Observable<string[]> {
    return from(Array(this.ideaRequestNum).keys()).pipe(
      () => from(this.ideaService.requestRandomIdeaId()),
      toArray(),
    );
  }

  startIdeaRequests(): void {
    this.ideaSubscription = from([1])
      .pipe(mergeMap(this.buildIdeaRequest.bind(this)))
      .subscribe((ideaIds) => ideaIds.forEach(this.addIdeaCard.bind(this)));
  }

  stopIdeaRequests(): void {
    if (this.ideaSubscription) {
      this.ideaSubscription.unsubscribe();
      this.ideaSubscription = undefined;
    }
  }

  addIdeaCard(ideaId: string): void {
    console.log("Recieved "+ideaId)
    console.log(["Sending To ",this.cardDomain])
    if (this.cardDomain) {
      this.cardDomain.addIdeaIdEvent.next(ideaId);
    }
  }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
    this.startIdeaRequests();
  }

  ngOnDestroy() {
    this.stopIdeaRequests();
  }
}
