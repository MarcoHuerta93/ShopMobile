import { Pipe, PipeTransform } from '@angular/core';
import {URL_IMAGENES} from "../config/url.servcios";

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {

  transform(codigo: string) {
    return URL_IMAGENES + codigo + ".jpg";   
  }

}
