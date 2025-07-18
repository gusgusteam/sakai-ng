//import { bootstrapApplication } from '@angular/platform-browser';
//import { appConfig } from './app.config';
//import { AppComponent } from './app.component';


//bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

//import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app.module';
//import {environment} from './environments/environment';

//if (environment.production) {
//    enableProdMode();
//}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
