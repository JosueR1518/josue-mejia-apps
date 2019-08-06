import { Component, OnInit } from '@angular/core';
import { InitAnimationsService } from '../../services/init-animations.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent implements OnInit {

  constructor(private initService: InitAnimationsService) { }

  ngOnInit() {
  this.initService. arlo_tm_hamburger();
  }


  cerrarMenu() {

    this.initService.arlo_tm_cerrar_menu();

  }

}
