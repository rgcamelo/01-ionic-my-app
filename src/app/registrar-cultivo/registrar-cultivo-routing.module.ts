import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarCultivoPage } from './registrar-cultivo.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarCultivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarCultivoPageRoutingModule {}
