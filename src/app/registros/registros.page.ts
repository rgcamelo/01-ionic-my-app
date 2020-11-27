import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { RegistrarActividadPage } from '../registrar-actividad/registrar-actividad.page';
import { DataService } from '../services/data.service';
import { Actividad } from '../models/actividad.model';
import { Registro } from '../models/registro.model';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {

  constructor(private modalCtrl: ModalController,
    private dataService:DataService,
    private route: ActivatedRoute) { }

  reference:string = '';
  actividades: Registro[] = [];
  actividad:string = '';

  ngOnInit() {
    this.getRegistros();
  }

  async registrarActividad(){
    const modal = await this.modalCtrl.create({
      component: RegistrarActividadPage,
      componentProps:{
        reference: this.reference
      }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log(data);
    this.getRegistros();
  }

  getRegistros(){
    this.reference = this.route.snapshot.paramMap.get('id').toString();
    this.dataService.getRegistros(this.reference).subscribe( res => {
      
      this.actividades = res.registros;
      console.log(this.actividades);
    })
  }

  segmentChanged(event){
    console.log(event.detail.value);
    this.actividad = event.detail.value;
    this.getRegistros();
  }


  

}
