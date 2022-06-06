import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstacionamientoPageRoutingModule } from './estacionamiento-routing.module';

import { EstacionamientoPage } from './estacionamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstacionamientoPageRoutingModule
  ],
  declarations: [EstacionamientoPage]
})
export class EstacionamientoPageModule {}
