import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    $(document).ready(function () {
      $('#search_form').submit(function (e) {
        e.preventDefault();
      });
      $('#search_input').keyup(function () {
        var str = $(this).val();

        if (str != '') {
          // $('.tab-nav').hide();
          $('.card-header').hide();

          $('.card-header').each(function () {
            var txt = $(this).text();
            // tslint:disable-next-line:no-eval
            var a = str.toString();
            var regx = new RegExp(a, 'gi')
            var status = regx.exec(txt);

            if (status && status.length > 0) {
              $(this).show();
            } else {
              $('.well').css('border', 'none');
            }
          });
        } else {
          $('.tab-nav').show();
          $('.card-header').show();
          $('.well').css('border-bottom', '1px solid aqua');
        }
      });
    });
  }

}
