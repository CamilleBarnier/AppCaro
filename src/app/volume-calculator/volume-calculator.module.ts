import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolumeCalculatorPageRoutingModule } from './volume-calculator-routing.module';

import { VolumeCalculatorPage } from './volume-calculator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolumeCalculatorPageRoutingModule
  ],
  declarations: [VolumeCalculatorPage]
})
export class VolumeCalculatorPageModule {}
