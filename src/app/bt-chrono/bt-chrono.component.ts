import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bt-chrono',
  templateUrl: './bt-chrono.component.html',
  styleUrls: ['./bt-chrono.component.css']
})
export class BtChronoComponent {
  public msg = '';
  public messages: Map<boolean, string> = new Map();
  public chronoInitialized = true;
  public chronoStarted = false;

  @Output('chronoState') emitterChronoState = new EventEmitter();
  @Output('initializeChrono') emitterInitializeChrono = new EventEmitter();

  constructor() {
    this.messages.set(false, 'START CHRONO');
    this.messages.set(true, 'STOP CHRONO');
    this.msg = <string>this.messages.get(this.chronoStarted);
  }

  sendChronoStateToParent() {
    this.chronoInitialized = false;
    this.chronoStarted = !this.chronoStarted;
    this.emitterChronoState.emit({ value: this.chronoStarted });
    this.msg = <string>this.messages.get(this.chronoStarted);
  }

  resetChrono() {
    this.chronoInitialized = !this.chronoStarted;
    this.emitterInitializeChrono.emit();
  }
}
