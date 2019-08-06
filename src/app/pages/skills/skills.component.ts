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
   experience: '2 años de experiecia',
   number: '85'
  },
    {name: 'IONIC 4 ',
    experience: '10 meses de experiecia',
    number: '80'
  },
  {name: 'HTML, Boostrap 4',
  experience: '5 años de experiecia',
  number: '95'
  },
  {name: 'Firebase Database ',
  experience: '8 meses de experiecia',
  number: '70'
  },
  {name: 'MySql  ',
  experience: '5 años de experiecia',
  number: '90'
  },
  {name: 'SCRUM  ',
  experience: '9 meses de experiecia',
  number: '70'
  }
  ];
  constructor(private initService: InitAnimationsService) { }

  ngOnInit() {

    this.initService.arlo_tm_progress_wrap();
  }

}
