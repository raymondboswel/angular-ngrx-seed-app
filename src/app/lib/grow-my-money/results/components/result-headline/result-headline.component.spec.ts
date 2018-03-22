import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultHeadlineComponent } from './result-headline.component';

describe('ResultHeadlineComponent', () => {
  let component: ResultHeadlineComponent;
  let fixture: ComponentFixture<ResultHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
