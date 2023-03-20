import { Component } from '@angular/core';
import { ScreenshotEvent } from '@rdlabo/capacitor-screenshot-event';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isEnabled = false;
  didNoticed = false;
  constructor() {
    ScreenshotEvent.addListener('userDidTakeScreenshot', () => {
      this.didNoticed = true;
    })
  }

  initialize(event: CustomEvent) {
    this.didNoticed = false;
    if (event.detail.checked) {
      ScreenshotEvent.startWatchEvent();
    } else {
      ScreenshotEvent.removeWatchEvent();
    }
  }

}
