import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  pathImg = 'assets/img/svg/flaticon/';
  services: any[] = [
    {
    icon: this.pathImg + 'coding.svg',
    title: 'Web Apps ',
    desc: 'Web Applications build with the most popular web tecbologies, escalables and easy to maintenance.'
  },
  {
    icon: this.pathImg + 'smartphone-with-internet.svg',
    title: 'Mobile Apps ',
    desc: 'Have a mobile App in your business is a great oportunity to reach more than 5.1 millions people in the world.'
  },
  {
    icon: this.pathImg + 'layout.svg',
    title: 'Websites',
    desc: 'Improving your digital presence on the internet is essential. A website will help you achieve it.'
  },
 

  {
    icon: this.pathImg + 'responsive.svg',
    title: 'Responsive Design',
    desc: 'Improving your digital presence on the internet is essential. A website will help you achieve it.'
  },
  {
    icon: this.pathImg + 'domain.svg',
    title: 'Web Hosting',
    desc: 'Let me advise you so that you can host your application getting more benefits at the best price.'
  },
/*   {
    icon: this.pathImg + 'growth.svg',
    title: 'IT project management',
    desc: ''
  }, */
  {
    icon: this.pathImg + 'success.svg',
    title: 'Business suite ',
    desc: 'Improving your digital presence on the internet is essential. A website will help you achieve it.'
  },
  /* {
    icon: this.pathImg + 'chat.svg',
    title: 'Technical support',
    desc: ''
  },
  {
    icon: this.pathImg + 'cctv.svg',
    title: 'Video Surveillance Systems',
    desc: ''
  }, */
];
  constructor() { }

  ngOnInit() {
  }

}
