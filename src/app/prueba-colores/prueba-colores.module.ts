import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaColoresPageRoutingModule } from './prueba-colores-routing.module';

import { PruebaColoresPage } from './prueba-colores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaColoresPageRoutingModule
  ],
  declarations: [PruebaColoresPage]
})
export class PruebaColoresPageModule {}
