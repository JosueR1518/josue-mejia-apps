import { Component, OnInit } from '@angular/core';
import { PageInfoService } from '../../services/page-info.service';

@Component({
  selector: 'app-toggle-menu',
  templateUrl: './toggle-menu.component.html',
  styleUrls: ['./toggle-menu.component.css']
})
export class ToggleMenuComponent implements OnInit {


  urlLogo: string = 'assets/img/logo/desktop-logo.png';
  socialMedia: any = null;
  constructor(public dataPageService: PageInfoService) {


    this.socialMedia = dataPageService.infoPage.social_media;
  }

  ngOnInit() {
  }

}
