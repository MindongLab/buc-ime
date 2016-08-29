
import 'reflect-metadata';
import 'zone.js/dist/zone';
import {bootstrap} from 'angular2/platform/browser';

import {CandidateView} from './CandidateView';

export function startIME(){
    let a = document.createElement('div');
    a.innerHTML = "<buc-candidate></buc-candidate>";
    document.body.appendChild(a);
    bootstrap(CandidateView);
}

window.st = () => startIME();