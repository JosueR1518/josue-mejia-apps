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
    desc: ''
  },
  {
    icon: this.pathImg + 'smartphone-with-internet.svg',
    title: 'Mobile Apps ',
    desc: ''
  },
  {
    icon: this.pathImg + 'layout.svg',
    title: 'Websites',
    desc: ''
  },
  {
    icon: this.pathImg + 'domain.svg',
    title: 'Web Hosting',
    desc: ''
  },

  {
    icon: this.pathImg + 'responsive.svg',
    title: 'Responsive Design',
    desc: ''
  },
  {
    icon: this.pathImg + 'growth.svg',
    title: 'IT project management',
    desc: ''
  },
  {
    icon: this.pathImg + 'success.svg',
    title: 'Business suite ',
    desc: ''
  },
  {
    icon: this.pathImg + 'chat.svg',
    title: 'Technical support',
    desc: ''
  },
  {
    icon: this.pathImg + 'cctv.svg',
    title: 'Video Surveillance Systems',
    desc: ''
  },
];
  constructor() { }

  ngOnInit() {
  }

}
