import { Component, OnInit } from '@angular/core';
import { InitAnimationsService } from 'src/app/services/init-animations.service';
import { PageInfoService } from '../../services/page-info.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private initService: InitAnimationsService,
    public ps: PageInfoService) { }

  ngOnInit() {


    this.initService.arlo_tm_contact_form();
  }

}
