import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//servicios
import {CarritoService, UsuarioService, ProductosService} from "../app/index.services";
//pipes
import { ImagenPipe } from "./imagen.pipe";

@NgModule({
  declarations: [
    AppComponent, 
    ImagenPipe],
  entryComponents: [],
  imports: [
    BrowserModule, 
    HttpModule,
    IonicModule.forRoot(), 
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    CarritoService, 
    UsuarioService, 
    ProductosService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
