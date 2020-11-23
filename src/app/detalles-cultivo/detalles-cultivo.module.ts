import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesCultivoPageRoutingModule } from './detalles-cultivo-routing.module';

import { DetallesCultivoPage } from './detalles-cultivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesCultivoPageRoutingModule
  ],
  declarations: [DetallesCultivoPage]
})
export class DetallesCultivoPageModule {}
