import { Component, OnInit } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import * as $ from 'jquery';

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
    $(document).ready(function () {
      (function ($, undefined) {
        "use strict";

        $(function () {
          var $form = $("#simulasiPendanaan");
          var $input = $form.find("#inputJumlah");

          $input.on("keyup", function (event) {
            // When user select text in the document, also abort.
            var selection = window.getSelection().toString();
            if (selection !== '') {
              return;
            }

            var $this = $(this);

            // Get the value.
            var inputan = $this.val();

            var input = inputan.toString().replace(/[\D\s\._\-]+/g, "");
            var inputnumber = parseFloat(input);
            if(inputnumber){
              inputnumber = inputnumber;
            }else{
              inputnumber = 0;
            }
            $this.val(function () {
              return (inputnumber === 0) ? "" : inputnumber.toLocaleString("de-DE");
            });
          });

          $form.on("submit", function (event) {

            var $this = $(this);
            var arr = $this.serializeArray();

            for (var i = 0; i < arr.length; i++) {
              arr[i].value = arr[i].value.replace(/[($)\s\._\-]+/g, ''); // Sanitize the values.
            };
          });

        });
      })($);
    });
  }

  kalkulasi() {
    var jumlah = $('#simulasiPendanaan').find('input[name="jumlah"]').val();
    var bunga = $('#simulasiPendanaan').find('input[name="bunga"]').val();
    var tenor = $('#simulasiPendanaan').find('select[name="tenor"]').val();
    var tipe_pembayaran = $('#simulasiPendanaan').find('input[name="jenis_pembayaran"]:checked').val();

    if (jumlah == '') {
      $('#error-jumlah').html('*Harus diisi');
      $('#error-jumlah').css('color', 'red');
    } else {
      $('#error-jumlah').html('');
    }

    if (bunga == '') {
      $('#error-bunga').html('*Harus diisi');
      $('#error-bunga').css('color', 'red');
    } else if(bunga > 100) {
      $('#error-bunga').html('*Maksimal 100');
      $('#error-bunga').css('color', 'red');
    }
    else {
      $('#error-bunga').html('');
    }


    // calculation
    var jumlahan = jumlah.toString();
    var jumlah_fix = parseInt(jumlahan.replace(/\./g, ''));

    var bungae = parseFloat(bunga.toString());
    var tenore = parseFloat(tenor.toString());


    var bunga_fix = (bungae / 12) * tenore;
    var getBunga = (bunga_fix / 100) * jumlah_fix;

    if (tipe_pembayaran == 'bulanan') {
      var income = (jumlah_fix + getBunga) / tenore;
    } else {
      var income = jumlah_fix + getBunga;
    }

    var hasil = income.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$&,');

    if(bunga != '' && bunga <= 100 && jumlah != ''){
      $('#income').text('IDR ' + hasil);
      if (tipe_pembayaran == 'bulanan') {
        $('#judul').text('Estimasi Pengembalian Dana Perbulan : ');
      } else if (tipe_pembayaran == 'penuh') {
        $('#judul').text('Estimasi Pengembalian Akhir : ');
      }
    }else {
      $('#income').text('IDR ' + '0');
    }
  }

}
