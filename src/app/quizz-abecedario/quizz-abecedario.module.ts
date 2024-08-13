import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizzAbecedarioPageRoutingModule } from './quizz-abecedario-routing.module';

import { QuizzAbecedarioPage } from './quizz-abecedario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizzAbecedarioPageRoutingModule
  ],
  declarations: [QuizzAbecedarioPage]
})
export class QuizzAbecedarioPageModule {}
