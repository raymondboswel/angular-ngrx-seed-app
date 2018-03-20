import { EffectsModule } from '@ngrx/effects';
import { ClientNameComponent } from './components/presentation/client-name/client-name.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowMyMoneyComponent } from './grow-my-money.component';
import { ClientReactiveModule } from './client-reactive/client-reactive.module';
import { StoreModule } from '@ngrx/store';
import { appReducers } from '../../app-reducer';

describe('GrowMyMoneyComponent', () => {
  let component: GrowMyMoneyComponent;
  let fixture: ComponentFixture<GrowMyMoneyComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [GrowMyMoneyComponent, ClientNameComponent],
        imports: [
          StoreModule.forRoot(appReducers),
          ClientReactiveModule,
          EffectsModule.forRoot([])
        ]
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
