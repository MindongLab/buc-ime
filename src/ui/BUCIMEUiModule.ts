
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CandidateView } from './CandidateView';
import { ToolbarView } from './ToolbarView';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
    ],
    declarations: [CandidateView, ToolbarView],
    bootstrap: [CandidateView, ToolbarView],
    exports: [CandidateView]
})
export class BUCIMEUiModule {}

