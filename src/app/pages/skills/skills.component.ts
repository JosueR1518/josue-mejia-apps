import { Component, OnInit } from '@angular/core';
import { InitAnimationsService } from '../../services/init-animations.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  habilities: any[] = [
  
   
   {name: 'Angular FrameWork/ Spring Framework ',
   experience: '2 years of experience',
   number: '85'
  },
    {name: 'Ionic Framework 4 ',
    experience: '10 months de experiecia',
    number: '80'
  },
  {name: 'HTML, Boostrap 4',
  experience: '5 years of experiecia',
  number: '95'
  },

  {name: 'Google Cloud Platform (gcp) ',
  experience: '18 months of experience',
  number: '70'
  },
  {name: 'MySQL/MariaDB  ',
  experience: '5 years of experience',
  number: '90'
  },
  {name: 'Trello  ',
  experience: '5 years of experience',
  number: '95'
  },
  {name: 'SCRUM  ',
  experience: '10 months of experience',
  number: '75'
  },
 
 
  ];
  constructor(private initService: InitAnimationsService) { }

  ngOnInit() {

    this.initService.arlo_tm_progress_wrap();
  }

}
