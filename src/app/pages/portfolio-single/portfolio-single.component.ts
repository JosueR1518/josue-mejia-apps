import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { ActivatedRoute } from '@angular/router';
import { InitAnimationsService } from '../../services/init-animations.service';


declare var $: any;
@Component({
  selector: 'app-portfolio-single',
  templateUrl: './portfolio-single.component.html',
  styleUrls: ['./portfolio-single.component.css']
})
export class PortfolioSingleComponent implements OnInit {


  project: any = [];
  projects: any[] = [];
  id: number;
  slidePosition = 0;
  loading = true;
  constructor(
    private ps: PortfolioService,
    private activatedRoute: ActivatedRoute,
    private is: InitAnimationsService) {




      this.activatedRoute.params.subscribe( params => {

              this.id = params.id;
              this.ps.getProject(params.id).then( data => {
                this.project = data;


                this.ps.getPortfolio().then((resp: any[]) => {

                this.projects = resp;
                this.makeCarusel(this.projects, this.id);
              });
              });
      });



  }

   ngOnInit() {



  }




  private makeCarusel(data: any[], index: number) {

      for (let i = 0; i < data.length ; i++) {
              if (data[i].id === index) {
                this.slidePosition = i;
                i = data.length;
              }
          }

      this.loading = false;
  }


  next() {

    this.loading = true;

    if (this.slidePosition === (this.projects.length - 1) ) {
      this.slidePosition = 0;
    } else {
      this.slidePosition++;
    }

    this.selectProject();
  }
  prev() {

    this.loading = true;

    if (this.slidePosition === 0 ) {
      this.slidePosition = this.projects.length - 1 ;
    } else {
      this.slidePosition--;
    }

    this.selectProject();

  }


  private selectProject() {

    this.project = this.projects[this.slidePosition];

    setTimeout( () => {
      this.loading = false;
    }, 300);
  }

}
