import * as data from './src/data'; 
import {BUCIMEParser as Parser} from './src/parser';

let parser = new Parser(data.initials, data.finals, data.keymap);

window.bucime = {
    parser: parser
};