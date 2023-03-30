import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  
})
export class BusquedaComponent {

  @ViewChild('txtbuscar')txtbuscar!:ElementRef<HTMLInputElement>

  
  constructor(private gifsService:GifsService){

  }
  mostrar(){
    this.gifsService.agregar_historial(this.txtbuscar.nativeElement.value)
    this.txtbuscar.nativeElement.value = ''
  
  }
}
