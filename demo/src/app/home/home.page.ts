import { ScreenshotEvent } from '@rdlabo/capacitor-screenshot-event';
import {Component, NgZone} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonToggle, IonIcon
} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {checkmarkCircle} from 'ionicons/icons';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonToggle, FormsModule, IonIcon, NgIf],
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
