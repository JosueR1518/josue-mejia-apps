import { Component, OnInit } from '@angular/core';
import { InitAnimationsService } from '../../services/init-animations.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  habilities: any[] = [
   {name: 'Angular FrameWork ',
   experience: '2 years of experience',
   number: '85'
  },
    {name: 'IONIC 4 ',
    experience: '10 months de experiecia',
    number: '80'
  },
  {name: 'HTML, Boostrap 4',
  experience: '5 years of experiecia',
  number: '95'
  },
  {name: 'Firebase Database ',
  experience: '8 months of experience',
  number: '70'
  },
  {name: 'MySql  ',
  experience: '5 years of experience',
  number: '90'
  },
  {name: 'SCRUM  ',
  experience: '8 months of experience',
  number: '70'
  }
  ];
  constructor(private initService: InitAnimationsService) { }

  ngOnInit() {

    this.initService.arlo_tm_progress_wrap();
  }

}
