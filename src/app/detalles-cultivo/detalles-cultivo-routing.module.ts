import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesCultivoPage } from './detalles-cultivo.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesCultivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesCultivoPageRoutingModule {}
