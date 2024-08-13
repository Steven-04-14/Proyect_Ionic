import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuizzNumerosPageRoutingModule } from './quizz-numeros-routing.module';

import { QuizzNumerosPage } from './quizz-numeros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuizzNumerosPageRoutingModule
  ],
  declarations: [QuizzNumerosPage]
})
export class QuizzNumerosPageModule {}
