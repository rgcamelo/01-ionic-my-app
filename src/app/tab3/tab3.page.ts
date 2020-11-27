import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegistrarCultivoPage } from '../registrar-cultivo/registrar-cultivo.page';
import { DataService } from '../services/data.service';
import { Cultivo } from '../models/cultivo.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  cultivos: Cultivo[] = [];
  cultivo:Cultivo;

  constructor(
    private modalCtrl: ModalController,
    private dataService: DataService) {}

    ngOnInit(){
      this.getCultivos();
    }

    getCultivos(){
      this.dataService.getCultivos().subscribe(
        res=>{
          if(res!=null){
            this.cultivos = res.cultivos;
          }
        }
      )
    }

  async registrarCultivo(){
    const modal = await this.modalCtrl.create({
      component: RegistrarCultivoPage,
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    
    this.getCultivos();
    
  }

  
  
}
