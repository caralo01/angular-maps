import { Component } from '@angular/core';

import { MapasService } from './services/mapas.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom:number = 1;
  draggable:string = "1";
  selMarcador:any;

  constructor(private _ms:MapasService){
    this._ms.cargarMarcadores();
  }

  onChoseLocation(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

  addLocation(event){

    let marcador:any = {
      lat: event.coords.lat,
      lng: event.coords.lng,
      titulo: "sin titulo",
      draggable: true
    }
    this._ms.addMarcadores(marcador);
  }

  clickMarcador(marcador, pos){
    console.log(pos, marcador);
    this.selMarcador = marcador;
    this.draggable = marcador.draggable ? "1":"0";
  }

  dragEndMarcador(marcador, event){
    console.log(marcador);
    console.log(event);
    marcador.lat = event.coords.lat;
    marcador.lng = event.coords.lng;

    this._ms.guardarMarcadores();


  }

  borrar(pos){
    console.log(pos);
    this.selMarcador = null;
    this._ms.borrarMarcador(pos);
  }

  cambiarDraggable(){
    if(this.draggable == "1"){
      this.selMarcador.draggable = true;
    }
    else{
      this.selMarcador.draggable = false;
    }
  }

}
