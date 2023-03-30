import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  get historial(){
    return this.gifsService.obtener_historial;
  }
  constructor(private gifsService:GifsService){}
  guardar(dato:string){
    this.gifsService.agregar_historial(dato)
  }
}
