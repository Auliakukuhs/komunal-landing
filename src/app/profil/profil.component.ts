import { Component, OnInit } from '@angular/core';
import {profiles} from "./profiles";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  profiles = profiles;
  constructor() { }

  ngOnInit() {
  }

}
