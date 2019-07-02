import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map'
import {URL_SERVICIOS} from "../config/url.servcios";

import { resolve, reject } from 'q';

 

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  pagina:number = 0;
  productos:any[] = [];

  constructor(public http: Http) { 
    this.cargar_todos();
  }

//https://stackoverflow.com/jobs/173208/frontend-engineer-pure-js-node-canvas-webgl-placeit?med=clc&clc-var=4
  cargar_todos(){
    let promesa = new Promise((resolve, reject)=>{
      let url = URL_SERVICIOS + "/productos/todos/" + this.pagina;
      this.http.get(url).pipe(map( resp => resp.json())).subscribe( data =>{
        
        if (data.error) {
          //Aqui hay un problema 
        } else {
          let nuevaData = this.agrupar(data.productos,2);
          this.productos.push(...nuevaData);
          this.pagina +=1;
        }
        resolve();
       })
    });
    return promesa;
  }

  private agrupar(arr:any, tamano:number){
    let nuevoArreglo = [];
    for (let i = 0; i < arr.length; i+=tamano) {
      nuevoArreglo.push(arr.slice(i, i+tamano));
    }
    console.log(nuevoArreglo);
    return nuevoArreglo;
  }
}
