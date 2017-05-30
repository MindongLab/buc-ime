import {Component} from '@angular/core';
import {Draggable} from './Draggable';

@Component({
    selector: 'buc-toolbar',
    templateUrl: 'src/ui/ToolbarView.html',
    styleUrls: ['src/ui/ToolbarView.css'],
    directives: [Draggable]
})
export class ToolbarView {

}