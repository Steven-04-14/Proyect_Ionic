import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaAbecedarioPageRoutingModule } from './prueba-abecedario-routing.module';

import { PruebaAbecedarioPage } from './prueba-abecedario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaAbecedarioPageRoutingModule
  ],
  declarations: [PruebaAbecedarioPage]
})
export class PruebaAbecedarioPageModule {}
