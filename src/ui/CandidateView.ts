import {Component} from '@angular/core';
import {Draggable} from './Draggable';

@Component({
    selector: 'buc-candidate',
    templateUrl: 'src/ui/CandidateView.html',
    styleUrls: ['src/ui/CandidateView.css'],
    directives: [Draggable],
    host: {
        "(document:keydown)" :'onKeyDown($event)'
    }
})
export class CandidateView {
    candidates: Array<string> = [
        'a',
        'b',
        'c'
    ];
    keystring: string = '';
    onKeyDown(e) {
        console.log(e);
        if (e.key == 'Backspace') {
            this.keystring = this.keystring.slice(0,-1);
        } else {
this.keystring += e.key;
        }
        
    }
}