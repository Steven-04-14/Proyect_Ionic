import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaNumerosPageRoutingModule } from './prueba-numeros-routing.module';

import { PruebaNumerosPage } from './prueba-numeros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaNumerosPageRoutingModule
  ],
  declarations: [PruebaNumerosPage]
})
export class PruebaNumerosPageModule {}
