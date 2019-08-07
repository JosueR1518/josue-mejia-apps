import { Component, OnInit, AfterViewInit } from '@angular/core';
import { InitAnimationsService } from '../../services/init-animations.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




  constructor(private initService: InitAnimationsService) {}

  ngOnInit() {

    const cargos = ['Desarrollador Front-end ', 'Freelancer', 'UI/UX Designer', 'Emprendedor' ];

    this.initService.arlo_tm_animate_text(cargos);
    this.initService.arlo_tm_animate_particles();
  }












}
