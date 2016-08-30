
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CandidateView } from './CandidateView';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
    ],
    declarations: [CandidateView],
    bootstrap: [CandidateView],
    exports: [CandidateView]
})
export class BUCIMEUiModule {}

