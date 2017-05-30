
import 'reflect-metadata';
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BUCIMEUiModule } from './BUCIMEUiModule';
//import { platformBrowser } from '@angular/platform-browser';
   // platformBrowserDynamic().bootstrapModule(BUCIMEUiModule);
//import { BUCIMEUiModuleNgFactory } from './BUCIMEUiModule.ngfactory';
function startIME(){
    let a = document.createElement('div');
    a.innerHTML = "<buc-candidate></buc-candidate><buc-toolbar> </buc-toolbar>";
    document.body.appendChild(a);
    platformBrowserDynamic().bootstrapModule(BUCIMEUiModule);
    //platformBrowser().bootstrapModuleFactory(BUCIMEUiModuleNgFactory);
}

window.st = () => startIME();