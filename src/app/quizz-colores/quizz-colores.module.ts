import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizzColoresPageRoutingModule } from './quizz-colores-routing.module';

import { QuizzColoresPage } from './quizz-colores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizzColoresPageRoutingModule
  ],
  declarations: [QuizzColoresPage]
})
export class QuizzColoresPageModule {}
