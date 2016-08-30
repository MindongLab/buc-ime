import {Component} from '@angular/core';
//import {Draggable} from 'ng2-draggable';
@Component({
    selector: 'buc-candidate',
    templateUrl: 'src/ui/CandidateView.html',
    styleUrls: ['src/ui/CandidateView.css'],
   // directives: [Draggable]
})
export class CandidateView {
    candidates: Array<string> = [
        'a',
        'b',
        'c'
    ];

}