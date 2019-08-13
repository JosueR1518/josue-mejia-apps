import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { ActivatedRoute } from '@angular/router';
import { InitAnimationsService } from '../../services/init-animations.service';


declare var $:any;
@Component({
  selector: 'app-portfolio-single',
  templateUrl: './portfolio-single.component.html',
  styleUrls: ['./portfolio-single.component.css']
})
export class PortfolioSingleComponent implements OnInit {
  

  project: any = [];
  //projects: any[] = [];
 // id: number;
  //startPosition: number =0;
  constructor(
    private ps: PortfolioService,
    private activatedRoute: ActivatedRoute,
    private is: InitAnimationsService) {




      this.activatedRoute.params.subscribe( params => {

             // this.id = params.id;
              this.ps.getProject(params.id).then( data => {
                this.project = data;
/* 

                this.ps.getPortfolio().then((resp: any[]) => {

                this.projects = resp;
                this.makeCarusel(this.projects, this.id);
              }); */
              });
      });



  }

   ngOnInit() {



  }




  private makeCarusel(data: any[], index: number) {

      let startPosition = 0;
      for (let i = 0; i < data.length ; i++) {
              if (data[i].id === index) {
                startPosition = i;
                i = data.length;
              }
          }

        //  this.startPosition = startPosition;
      console.log(startPosition);
     




  }

}
