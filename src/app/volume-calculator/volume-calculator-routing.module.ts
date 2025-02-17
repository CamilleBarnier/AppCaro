import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolumeCalculatorPage } from './volume-calculator.page';

const routes: Routes = [
  {
    path: '',
    component: VolumeCalculatorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolumeCalculatorPageRoutingModule {}
