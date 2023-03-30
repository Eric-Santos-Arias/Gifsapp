import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apkey:string = 'o3o1lMEpP9kWDLKRaIXcry5REuXBHUeg';
  private urlServeice = 'https://api.giphy.com/v1/gifs/search'
  private _historial:string[] = [];

  public resultado:Gif[] = [];


  get obtener_historial(){
    return [...this._historial]
  }
  constructor(private http:HttpClient) { 
    this._historial = JSON.parse(localStorage.getItem('historial')!)|| [];
    this.resultado = JSON.parse(localStorage.getItem('resultado')!) || [];
  }
// ------------------------------
  agregar_historial(query:string){
    query = query.toLowerCase()

    if(query.trim().length == 0){
      return
    }
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.slice(0,10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
      console.log(this._historial)
    }



    const params = new HttpParams()
    .set('api_key',this.apkey)
    .set('q',query)
    .set('limit', '10')


    this.http.get<SearchGifsResponse>(`${this.urlServeice}`, {params: params})
    .subscribe( (resp )=>{
      console.log(resp.data);
      this.resultado = resp.data;
      localStorage.setItem('resultado', JSON.stringify(this.resultado));
    })
  }
  

}
