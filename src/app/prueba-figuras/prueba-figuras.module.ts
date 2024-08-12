import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaFigurasPageRoutingModule } from './prueba-figuras-routing.module';

import { PruebaFigurasPage } from './prueba-figuras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaFigurasPageRoutingModule
  ],
  declarations: [PruebaFigurasPage]
})
export class PruebaFigurasPageModule {}
