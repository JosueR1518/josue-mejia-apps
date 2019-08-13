import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(
   private http: HttpClient,
   private db: AngularFirestore) { }




  getPortfolio() {


    return new Promise<any>((resolve, reject) => {

      this.db.collection('projects').snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() ;
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })).subscribe(projects => {
        resolve(projects);
      });


    });
  }


  getProject(id: string) {


    return new Promise<any>((resolve, reject) => {

      this.db.collection('projects').doc(id).valueChanges().subscribe(project => {
        resolve(project);
      });


    });
  }
}
