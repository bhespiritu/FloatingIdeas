import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {CardDomainComponent} from "../card-domain/card-domain.component";
import {from, interval, mergeMap, range, Subscription, take, toArray} from "rxjs";
import {IdeaStateService} from "../task/idea-state.service";
import {IdeaData} from "../../../models/idea-data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy{
  @ViewChild("card-domain")
  cardDomain?: CardDomainComponent

  ideaRequestNum = 1;

  ideaSubscription? : Subscription;

  constructor(private router: Router,
              private ideaService: IdeaStateService) {

  }

  startIdeaRequests(): void {
    this.ideaSubscription = interval(1000).pipe(
      // mergeMap(()=>range(0,this.ideaRequestNum).pipe(()=>from(this.ideaService.requestRandomIdeaId()))),
      //
    )
  }

  stopIdeaRequests(): void {
    if (this.ideaSubscription) {
      this.ideaSubscription.unsubscribe();
      this.ideaSubscription = undefined;
    }
  }

  addIdeaCard(ideaId : string): void {
    if(this.cardDomain)
    {
      this.cardDomain.add(ideaId)
    }
  }


  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }

  ngOnDestroy() {
    this.stopIdeaRequests();
  }
}
