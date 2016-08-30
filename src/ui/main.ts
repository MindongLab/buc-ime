
import 'reflect-metadata';
import 'zone.js/dist/zone';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BUCIMEUiModule } from './BUCIMEUiModule';
function startIME(){
    let a = document.createElement('div');
    a.innerHTML = "<buc-candidate></buc-candidate>";
    document.body.appendChild(a);
    platformBrowserDynamic().bootstrapModule(BUCIMEUiModule);
}

window.st = () => startIME();