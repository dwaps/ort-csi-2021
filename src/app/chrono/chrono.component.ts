import { Component } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.css']
})
export class ChronoComponent {
  public chrono = '00:000';

  private ms = [ 130, 299, 465, 865, 953 ];
  private msCounter = 0;
  private secCounter = 0;
  private idInterval: any;

  initializeChrono() {
    this.chrono = '00:000';
    this.msCounter = 0;
    this.secCounter = 0;
  }

  launchChrono(go: boolean) {
    if (go) {
      this.idInterval = setInterval(() => {
        if (this.msCounter >= this.ms.length) {
          this.secCounter++;
          this.msCounter = 0;
        }
        const seconds = this.secCounter < 10
          ? '0' + this.secCounter
          : this.secCounter;
        this.chrono = `${seconds}:${this.ms[this.msCounter++]}`;
      }, 1000 / this.ms.length);
    }
    else {
      if (this.idInterval) {
        clearInterval(this.idInterval);
      }
    }
  }
}
