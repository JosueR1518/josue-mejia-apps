import { Component, OnInit, AfterViewInit } from '@angular/core';
import { InitAnimationsService } from '../../services/init-animations.service';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit, AfterViewInit {



   portfolio: Array<any> = [];
  categories: any[] = [
    {title: 'Design', name: 'design'},
    {title: 'Web Develoment', name: 'development'},
    {title: 'IT management', name: 'management'} ];

  constructor(
    private initService: InitAnimationsService,
    private portafolioService: PortfolioService) { }

  ngOnInit() {

    this.portafolioService.getPortfolio().then( (projects: any[]) => {


      this.portfolio = projects;


      console.log(projects);
    });



  }
  ngAfterViewInit(): void {
    this.initService.arlo_tm_portfolio();

    setTimeout(() => this.initService.arlo_tm_projects(), 1000);

  }

}
