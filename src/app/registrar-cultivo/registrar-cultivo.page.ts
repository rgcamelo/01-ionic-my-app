import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Cultivo } from '../models/cultivo.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registrar-cultivo',
  templateUrl: './registrar-cultivo.page.html',
  styleUrls: ['./registrar-cultivo.page.scss'],
})
export class RegistrarCultivoPage implements OnInit {

  fecha: Date = new Date();

  cultivo:Cultivo = new Cultivo();

  constructor(private modalCtrl: ModalController, private dataService:DataService) { }

  ngOnInit() {
  }

  onSubmit(formulario : NgForm){
    console.log('submit');
    console.log(this.cultivo);
    console.log(formulario);

    if( this.cultivo != null){
      this.cultivo.fecha = this.fecha;
      console.log(this.cultivo);
  
      this.dataService.postCultivos(this.cultivo).subscribe(p => {
        if (p != null) {
          console.log(p);
        }
        else{
          console.log(p);
        }
      });
    }

    this.modalCtrl.dismiss('Registrar');
  }

  cancelar(){
    this.modalCtrl.dismiss('Cancelar');
  }



}
