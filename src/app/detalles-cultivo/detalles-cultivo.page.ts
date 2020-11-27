import { Component, OnInit } from '@angular/core';
import { Cultivo } from '../models/cultivo.model';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-cultivo',
  templateUrl: './detalles-cultivo.page.html',
  styleUrls: ['./detalles-cultivo.page.scss'],
})
export class DetallesCultivoPage implements OnInit {

  reference:string = '';
  cultivo:Cultivo = new Cultivo();

  constructor(private dataService:DataService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCultivo();
  }

  getCultivo(){
    this.reference = this.route.snapshot.paramMap.get('id').toString();
    console.log(this.reference);
    this.dataService.getCultivo(this.reference).subscribe( res => {
      this.cultivo = res.cultivo;
    })
  }


}
