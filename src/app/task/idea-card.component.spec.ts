import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaCardComponent } from './idea-card.component';

describe('TaskComponent', () => {
  let component: IdeaCardComponent;
  let fixture: ComponentFixture<IdeaCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdeaCardComponent],
    });
    fixture = TestBed.createComponent(IdeaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
