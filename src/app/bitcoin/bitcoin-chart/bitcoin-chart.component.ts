import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../bitcoin.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bitcoin-chart',
  templateUrl: './bitcoin-chart.component.html',
  styleUrls: ['./bitcoin-chart.component.css']
})
export class BitcoinChartComponent implements OnInit {
  apiResult: String;

  constructor(private _bitCoinService: BitcoinService) { }

  ngOnInit() {
    this._bitCoinService.dailyBitcoinPrice()
      .subscribe(res => {
        this.apiResult = JSON.stringify(res);
      });
  }

}
