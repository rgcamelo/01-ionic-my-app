import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarActividadPageRoutingModule } from './registrar-actividad-routing.module';

import { RegistrarActividadPage } from './registrar-actividad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarActividadPageRoutingModule
  ],
  declarations: [RegistrarActividadPage]
})
export class RegistrarActividadPageModule {}
