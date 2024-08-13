import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizzColoresPage } from './quizz-colores.page';

const routes: Routes = [
  {
    path: '',
    component: QuizzColoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizzColoresPageRoutingModule {}
