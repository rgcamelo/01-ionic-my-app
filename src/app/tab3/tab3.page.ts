import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { RegistrarCultivoPage } from '../registrar-cultivo/registrar-cultivo.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertController: AlertController,
    private modalCtrl: ModalController) {}

  async registrarCultivo(){
    const modal = await this.modalCtrl.create({
      component: RegistrarCultivoPage,
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log(data);
  }
  
}
