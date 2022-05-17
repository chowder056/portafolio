import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuGeneralPage } from './menu-general.page';

const routes: Routes = [
  {
    path: '',
    component: MenuGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuGeneralPageRoutingModule {}
