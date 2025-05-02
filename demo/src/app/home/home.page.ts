import { Component, NgZone } from '@angular/core';
import { ScreenshotEvent } from '@rdlabo/capacitor-screenshot-event';
import { addIcons } from "ionicons";
import { checkmarkCircle } from "ionicons/icons";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: false
})
export class HomePage {
    isEnabled = false;
    didNoticed = false;
    constructor(private zone: NgZone) {
        ScreenshotEvent.addListener('userDidTakeScreenshot', () => {
            this.zone.run(() => (this.didNoticed = true));
        });
        addIcons({ checkmarkCircle });
    }

    initialize(event: CustomEvent) {
        this.didNoticed = false;
        if (event.detail.checked) {
            ScreenshotEvent.startWatchEvent().then(() => console.log('startWatchEvent'))
        } else {
            ScreenshotEvent.removeWatchEvent();
        }
    }
}
