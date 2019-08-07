import { Component, OnInit } from '@angular/core';
import { PageInfoService } from '../../services/page-info.service';
import { Socialmedia } from '../../interfaces/info-page.interface';

@Component({
  selector: 'app-toggle-menu',
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.css']
})
export class ToggleMenuComponent implements OnInit {


  urlLogo: string = 'assets/img/logo/desktop-logo.png';
  constructor(public ps: PageInfoService) {


  }

  ngOnInit() {
  }

}
