import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicRouteStrategy, provideIonicAngular, IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, IonApp, IonRouterOutlet],
    providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideIonicAngular()],
    bootstrap: [AppComponent],
})
export class AppModule { }
