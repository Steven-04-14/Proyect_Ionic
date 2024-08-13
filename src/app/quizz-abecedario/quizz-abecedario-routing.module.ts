import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizzAbecedarioPage } from './quizz-abecedario.page';

const routes: Routes = [
  {
    path: '',
    component: QuizzAbecedarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizzAbecedarioPageRoutingModule {}
