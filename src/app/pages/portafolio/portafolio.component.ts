import { Component, OnInit, AfterViewInit } from '@angular/core';
import { InitAnimationsService } from '../../services/init-animations.service';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit, AfterViewInit {
 


  portfolio: any[] = [];
  categories: any[] = [
    {title: 'Diseño', name: 'design'},
    {title: 'Desarrollo Web', name: 'development'},
    {title: 'Gestión IT', name: 'management'} ];

  constructor(
    private initService: InitAnimationsService,
    private portafolioService: PortfolioService) { }

  ngOnInit() {
/* 
    this.portafolioService.getPortfolio().subscribe( (data: any[]) => {


      this.portfolio = data;
    }); */



  }
  ngAfterViewInit(): void {
    this.initService.arlo_tm_portfolio();
    this.initService.arlo_tm_projects();
  }

}
