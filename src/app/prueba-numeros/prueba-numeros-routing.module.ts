import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaNumerosPage } from './prueba-numeros.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaNumerosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaNumerosPageRoutingModule {}
