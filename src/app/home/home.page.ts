import { Component, ViewChild  } from '@angular/core';
import {ProductosService} from "../productos.service";
import { IonInfiniteScroll, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    public navCtrl:NavController,
    private _ps: ProductosService) {}


    siguiente_pagina(IonInfiniteScroll){
    this._ps.cargar_todos().then( ()=>{
      IonInfiniteScroll.target.complete();
    });
  }

}   
