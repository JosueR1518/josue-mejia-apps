import { Component, OnInit, AfterViewInit } from '@angular/core';
import { InitAnimationsService } from 'src/app/services/init-animations.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, AfterViewInit {

  phrases: any[] = [
    {
      phrase: 'Many things are unlikely, only a few are impossible',
      author: 'Elon Musk / CEO Tesla'
      },
      {
        phrase: 'We all need people to give us feedback. This is how we improve',
        author: 'Bill Gates / Founder Microsoft'
        },
      {
        phrase: 'Never stop learning',
        author: 'Freddy Vega / CEO Platzi'
        }
  ];
  constructor(private initService: InitAnimationsService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.initService.arlo_tm_owl_carousel();
  }


}
