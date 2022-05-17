import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuGeneralPageRoutingModule } from './menu-general-routing.module';

import { MenuGeneralPage } from './menu-general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuGeneralPageRoutingModule
  ],
  declarations: [MenuGeneralPage]
})
export class MenuGeneralPageModule {}
