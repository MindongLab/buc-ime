import * as data from './data'; 
import {BUCIMEParser as Parser} from './parser';

let parser = new Parser(data.initials, data.finals, data.keymap);

window.bucime = {
    parser: parser
};