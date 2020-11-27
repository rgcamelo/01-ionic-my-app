import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Registro } from '../models/registro.model';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registrar-actividad',
  templateUrl: './registrar-actividad.page.html',
  styleUrls: ['./registrar-actividad.page.scss'],
})
export class RegistrarActividadPage implements OnInit {

  fecha: Date = new Date();
  @Input() reference:string;
  actividad:Registro = new Registro();


  constructor(private modalCtrl: ModalController,
    private dataService:DataService,
    private route:ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit(formulario : NgForm){
    console.log('submit');
    console.log(this.actividad);
    console.log(formulario);
    this.modalCtrl.dismiss();

    if( this.actividad != null){
      this.actividad.fecha = this.fecha;
      console.log(this.actividad.fecha);
      this.actividad.creference = this.reference;
      console.log(this.actividad);
    }

    this.dataService.postRegistros(this.actividad).subscribe(p => {
      if (p != null) {
        console.log(p);
      }
      else{
        console.log(p);
      }
    });

    this.modalCtrl.dismiss('Registrar');
  }


  cancelar(){
    this.modalCtrl.dismiss('Cancelar');
  }

  /*
  getCultivo(){
    this.dataService.getCultivo(this.reference).subscribe( res => {
      this.actividad.cultivo = res.cultivo;
    })
  }*/

}
