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
      phrase: 'Muchas cosas son improbables, solo unas pocas son imposibles',
      author: 'Elon Musk / CEO Tesla'
      },
      {
        phrase: 'Todos necesitamos personas que nos retroalimenten. Así es como mejoramos',
        author: 'Bill Gates / Founder Microsoft'
        },
      {
        phrase: 'Nunca pares de aprender',
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
