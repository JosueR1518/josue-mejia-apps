import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { PageInfoService } from '../../services/page-info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  age = 0;
  constructor(public ps: PageInfoService) { }

  ngOnInit() {



   const dt1 = new Date(1992, 11, 15);
   const dt2 = new Date();
   this.age = this.diff_years(dt2, dt1);
  }


  diff_years(dt2, dt1) {

  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff / 365.25));

 }



}
