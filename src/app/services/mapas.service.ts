import { Injectable } from '@angular/core';

@Injectable()
export class MapasService {

  public marcadores:any[] = [];

  constructor() { 
    let ejemplo:any = {
      lat:10,
      lng:54,
      titulo:"Algo",
      draggable:true
    }
    this.marcadores.push(ejemplo);
  }

  addMarcadores(marcador){
    this.marcadores.push(marcador);
    this.guardarMarcadores();
  }

  cargarMarcadores(){
    if(localStorage.getItem("marcadores")){
      this.marcadores = JSON.parse(localStorage.getItem("marcadores"));
    }
    else{
      this.marcadores = [];
    }
  }

  guardarMarcadores(){
    localStorage.setItem("marcadores", JSON.stringify(this.marcadores));
  }
  borrarMarcador(index){
    console.log(index);
    this.marcadores.splice(index, 1);
    this.guardarMarcadores();
  }
}
