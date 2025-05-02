import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonToggle, IonIcon } from "@ionic/angular/standalone";

@NgModule({
    imports: [CommonModule, FormsModule, HomePageRoutingModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonToggle, IonIcon],
    declarations: [HomePage],
})
export class HomePageModule { }
