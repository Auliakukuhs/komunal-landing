import {Component, AfterViewInit, OnInit} from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.css'],
})
export class BerandaComponent implements AfterViewInit, OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $("#testimonial-slider").owlCarousel({
      items: 3,
      itemsDesktop: [1000, 2],
      itemsDesktopSmall: [979, 2],
      itemsTablet: [767, 1],
      pagination: true,
      autoPlay: false
    });
  }

}
