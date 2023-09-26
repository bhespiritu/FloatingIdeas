import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardDomainComponent} from "./card-domain.component";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [CardDomainComponent],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    CardDomainComponent
  ]
})
export class CardDomainModule { }
