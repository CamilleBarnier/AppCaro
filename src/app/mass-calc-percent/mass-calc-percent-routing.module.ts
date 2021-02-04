import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MassCalcPercentPage } from './mass-calc-percent.page';

const routes: Routes = [
  {
    path: '',
    component: MassCalcPercentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MassCalcPercentPageRoutingModule {}
