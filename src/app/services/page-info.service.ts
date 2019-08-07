import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class PageInfoService {


  infoPage: InfoPage = {};
  cargada: boolean = false;
  constructor(private http: HttpClient) {


    this.getInfoPage();
   }





  getInfoPage() {

    this.http.get('assets/data/info-page.json').subscribe( (data: InfoPage) => {


      //console.log(data);
      this.infoPage = data;
      this.cargada = true;
    });
  }




  
}
