import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDomainComponent } from './card-domain.component';

describe('CardDomainComponent', () => {
  let component: CardDomainComponent;
  let fixture: ComponentFixture<CardDomainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDomainComponent]
    });
    fixture = TestBed.createComponent(CardDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
