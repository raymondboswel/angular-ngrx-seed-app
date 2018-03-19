import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowMyMoneyComponent } from './grow-my-money.component';

describe('GrowMyMoneyComponent', () => {
  let component: GrowMyMoneyComponent;
  let fixture: ComponentFixture<GrowMyMoneyComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [GrowMyMoneyComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowMyMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
