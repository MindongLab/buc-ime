"use strict";
var data = require('./data');
var parser_1 = require('./parser');
var parser = new parser_1.BUCIMEParser(data.initials, data.finals, data.keymap);
window.bucime = {
    parser: parser
};
