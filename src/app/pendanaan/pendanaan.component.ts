import { Component, OnInit } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pendanaan',
  templateUrl: './pendanaan.component.html',
  styleUrls: ['./pendanaan.component.css']
})
export class PendanaanComponent implements OnInit {
  // ======= Font Awesome ======== //
  faSyncAlt = faSyncAlt;
  faShieldAlt = faShieldAlt;

  constructor() { }

  ngOnInit() {
  }

}
