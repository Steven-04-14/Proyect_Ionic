import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaFigurasPage } from './prueba-figuras.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaFigurasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaFigurasPageRoutingModule {}
