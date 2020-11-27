import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarActividadPage } from './registrar-actividad.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarActividadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarActividadPageRoutingModule {}
