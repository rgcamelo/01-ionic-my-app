import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarCultivoPageRoutingModule } from './registrar-cultivo-routing.module';

import { RegistrarCultivoPage } from './registrar-cultivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarCultivoPageRoutingModule
  ],
  declarations: [RegistrarCultivoPage]
})
export class RegistrarCultivoPageModule {}
