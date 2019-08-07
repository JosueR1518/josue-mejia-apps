import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  pathImg = 'assets/img/svg/';
  services: any[] = [
    {
    icon: this.pathImg + 'new-tab.svg',
    title: 'Apps Web',
    desc: ''
  },
  {
    icon: this.pathImg + 'envelope.svg',
    title: 'Apps móviles',
    desc: ''
  },
  {
    icon: this.pathImg + 'new-tab.svg',
    title: 'Sitios Web',
    desc: ''
  },
  {
    icon: this.pathImg + 'layers.svg',
    title: 'Alojamiento Web',
    desc: ''
  },

  {
    icon: this.pathImg + 'new-tab.svg',
    title: 'Diseño Responsivo',
    desc: ''
  },
  {
    icon: this.pathImg + 'new-tab.svg',
    title: 'Gestión de proyectos IT',
    desc: ''
  },
  {
    icon: this.pathImg + 'camera-diaphragm.svg',
    title: 'Suite empresarial ',
    desc: ''
  },
  {
    icon: this.pathImg + 'camera-diaphragm.svg',
    title: 'Soporte Técnico ',
    desc: ''
  },
  {
    icon: this.pathImg + 'camera-diaphragm.svg',
    title: 'Sistemas de Videovigilancia',
    desc: ''
  },
];
  constructor() { }

  ngOnInit() {
  }

}
