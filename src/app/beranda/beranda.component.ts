import {Component, AfterViewInit, OnInit} from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.css']
})
export class BerandaComponent implements AfterViewInit, OnInit {

  constructor() {

  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    $("#testimonial-slider").owlCarousel({
      pagination: true,
      autoPlay: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1
        },
        767: {
          items: 1
        },
        900: {
          items: 2
        },
        1000: {
          items: 2
        },
        1024: {
          items: 3
        },
      }
    });
  }

}
