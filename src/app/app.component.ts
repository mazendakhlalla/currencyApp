import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dToE: number;
  eToD: number;
  usdToEur(u: string) {
    this.dToE = parseFloat((parseFloat(u) * 0.92).toFixed(2));
    return u;
  }
  eurToUsd(e: string) {
    this.eToD = parseFloat((parseFloat(e) * 1.09).toFixed(2));
    return e;
  }
  title = 'currencyApp';
}
