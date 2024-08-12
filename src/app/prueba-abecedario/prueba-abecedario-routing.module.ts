import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaAbecedarioPage } from './prueba-abecedario.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaAbecedarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaAbecedarioPageRoutingModule {}
