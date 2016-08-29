"use strict";
var data = require('./src/data');
var parser_1 = require('./src/parser');
var parser = new parser_1.BUCIMEParser(data.initials, data.finals, data.keymap);
window.bucime = {
    parser: parser
};