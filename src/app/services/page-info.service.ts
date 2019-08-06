import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {


  infoPage: any = {};
  cargada: boolean = false;
  constructor(private http: HttpClient) {


    this.getInfoPage();
   }





  getInfoPage() {

    this.http.get('assets/data/info-page.json').subscribe( data => {
      this.infoPage = data;
      this.cargada = true;
    });
  }




  
}
