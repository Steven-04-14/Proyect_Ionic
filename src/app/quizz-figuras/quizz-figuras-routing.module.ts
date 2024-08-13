import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizzFigurasPage } from './quizz-figuras.page';

const routes: Routes = [
  {
    path: '',
    component: QuizzFigurasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizzFigurasPageRoutingModule {}
