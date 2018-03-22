import { RouterEffects } from './router-reactive/router.effects';
import { GrowMyMoneyNavigationEffects } from './navigation.effects';
import { NavigationService } from './navigation.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GrowMyMoneyNavigationEffects, RouterEffects])
  ],
  declarations: [],
  providers: [NavigationService]
})
export class NavigationModule {}
