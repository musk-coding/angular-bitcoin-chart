import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BitcoinChartComponent } from './bitcoin/bitcoin-chart/bitcoin-chart.component';
import { BitcoinService } from './bitcoin.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BitcoinChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClient, BitcoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
