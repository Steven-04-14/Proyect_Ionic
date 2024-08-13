import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizzFigurasPageRoutingModule } from './quizz-figuras-routing.module';

import { QuizzFigurasPage } from './quizz-figuras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizzFigurasPageRoutingModule
  ],
  declarations: [QuizzFigurasPage]
})
export class QuizzFigurasPageModule {}
