"use strict";
var browser_1 = require('angular2/platform/browser');
var CandidateView_1 = require('./CandidateView');
function startIME() {
    var a = document.createElement('div');
    a.innerHTML = "<buc-candidate></buc-candidate>";
    document.body.appendChild(a);
    browser_1.bootstrap(CandidateView_1.CandidateView);
}
exports.startIME = startIME;
