import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-registrar-cultivo',
  templateUrl: './registrar-cultivo.page.html',
  styleUrls: ['./registrar-cultivo.page.scss'],
})
export class RegistrarCultivoPage implements OnInit {

  fecha: Date = new Date();

  cultivo = {
    nombre: '',
    surco: '',
    ubicacion:'',
    superficie:'',
    fecha : this.fecha,
  }

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  onSubmit(formulario : NgForm){
    console.log('submit');
    console.log(this.cultivo);
    console.log(formulario);
  }

  cancelar(){
    this.modalCtrl.dismiss('Cancelar');
  }



}
