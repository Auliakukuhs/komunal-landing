import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css']
})

export class ListProjectComponent implements OnInit {
  public projects: Array<any> = [];
  public fundedProjects: Array<any> = [];
  public total: number = 0;

  constructor(private http: HttpClient) {
    // this.length = this.data.length;
  }

  ngOnInit() {
    this.peluangPendanaan();
  }

  peluangPendanaan() {
    this.http.get<any>('http://komunal.xyz/api/utils/landing-peluang?lang=id').subscribe(response => {
      var result = response.data;
      this.total = result.total;
      console.log(this.total)
      for (let i = 0; i < result.length; i++) {
        if (result[+i]["status_name"] == "PENDANAAN") this.projects.push(result[+i]);
        if (result[+i]["status_name"] == "TERDANAI") this.fundedProjects.push(result[+i]);
      }
    });
  }

}
