import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizzNumerosPage } from './quizz-numeros.page';

const routes: Routes = [
  {
    path: '',
    component: QuizzNumerosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizzNumerosPageRoutingModule {}
