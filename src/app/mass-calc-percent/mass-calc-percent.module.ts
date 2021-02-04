import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MassCalcPercentPageRoutingModule } from './mass-calc-percent-routing.module';

import { MassCalcPercentPage } from './mass-calc-percent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MassCalcPercentPageRoutingModule
  ],
  declarations: [MassCalcPercentPage]
})
export class MassCalcPercentPageModule {}
