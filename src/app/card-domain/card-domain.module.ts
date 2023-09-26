import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardDomainComponent} from "./card-domain.component";
import {MatCardModule} from "@angular/material/card";
import {DragDropModule} from "@angular/cdk/drag-drop";



@NgModule({
  declarations: [CardDomainComponent],
  imports: [
    CommonModule,
    MatCardModule,
    DragDropModule,
  ],
  exports: [
    CardDomainComponent
  ]
})
export class CardDomainModule { }
