import { Component, OnInit } from '@angular/core';
import { InitAnimationsService } from '../../services/init-animations.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(private initService: InitAnimationsService) { }

  ngOnInit() {

    this.initService.arlo_tm_portfolio();
    this.initService.arlo_tm_projects();
  }

}
