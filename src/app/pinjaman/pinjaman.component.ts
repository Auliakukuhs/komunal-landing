import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-pinjaman',
  templateUrl: './pinjaman.component.html',
  styleUrls: ['./pinjaman.component.css']
})
export class PinjamanComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $(document).ready(function() {
      (function($, undefined) {
        'use strict';

        $(function() {
          var $form = $('#simulasiPinjaman');
          var $input = $form.find('#inputJumlah');

          $input.on('keyup', function(event) {
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

          $form.on('submit', function(event) {

            var $this = $(this);
            var arr = $this.serializeArray();

            for (var i = 0; i < arr.length; i++) {
              arr[i].value = arr[i].value.replace(/[($)\s\._\-]+/g, ''); // Sanitize the values.
            }
            ;
          });

        });
      })($);
    });
  }

  kalkulasi_pinjaman() {
    var jumlah = $('#simulasiPinjaman').find('input[name="jumlah"]').val();
    var bunga = $('#simulasiPinjaman').find('input[name="bunga"]').val();
    var tenor = $('#simulasiPinjaman').find('select[name="tenor"]').val();
    var tipe_pembayaran = $('#simulasiPinjaman').find('input[name="jenis_pembayaran"]:checked').val();

    if (jumlah == '') {
      $('#error-jumlah').html('*Harus diisi');
      $('#error-jumlah').css('color', 'red');
    } else {
      $('#error-jumlah').html('');
    }

    if (bunga == '') {
      $('#error-bunga').html('*Harus diisi');
      $('#error-bunga').css('color', 'red');
    } else if (bunga > 100) {
      $('#error-bunga').html('*Maksimal 100');
      $('#error-bunga').css('color', 'red');
    } else {
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

    if (bunga != '' && bunga <= 100 && jumlah != '') {
      $('#income').text('IDR ' + hasil);
      if (tipe_pembayaran == 'bulanan') {
        $('#judul').text('Estimasi Pengembalian Dana Perbulan : ');
      } else if (tipe_pembayaran == 'penuh') {
        $('#judul').text('Estimasi Pengembalian Akhir : ');
      }
    } else {
      $('#income').text('IDR ' + '0');
    }


  }
}

