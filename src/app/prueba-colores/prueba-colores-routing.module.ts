import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaColoresPage } from './prueba-colores.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaColoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaColoresPageRoutingModule {}
