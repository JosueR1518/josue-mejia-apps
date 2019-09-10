import { Component, OnInit, AfterViewInit } from '@angular/core';
import { InitAnimationsService } from '../../services/init-animations.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {




  constructor(private initService: InitAnimationsService) {}

  ngOnInit() {

    const cargos = [ 'IT Consultant', 'Full Stack Developer | Angular Framework|Spring Framework | MySQL | ORACLE ', 'UI Designer', 'Entrepreneur' ];


    this.initService.arlo_tm_animate_text(cargos);
    this.initService.arlo_tm_animate_particles();
  }












}
