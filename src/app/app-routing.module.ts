import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/home',
    pathMatch: 'full'
  },
  {
    path: 'folder/Calculator',
    loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorPageModule)
  },
  {
    path: 'folder/home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'mass-calc-percent',
    loadChildren: () => import('./mass-calc-percent/mass-calc-percent.module').then( m => m.MassCalcPercentPageModule)
  },
  {
    path: 'volume-calculator',
    loadChildren: () => import('./volume-calculator/volume-calculator.module').then( m => m.VolumeCalculatorPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
