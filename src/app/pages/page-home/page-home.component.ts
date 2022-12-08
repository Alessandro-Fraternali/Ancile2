import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent implements OnInit {
  hexagons = [
    {
      title: 'Chi Sono',
      link: 'myself',
    },
    {
      title: 'Progetti',
      link: 'projects',
    },
    {
      title: 'Certificazioni',
      link: 'certifications',
    },
    {
      title: 'Dettagli',
      link: 'details',
    },
    {
      title: 'Cambio lingua',
      link: 'languages',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
