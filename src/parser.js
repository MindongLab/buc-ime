"use strict";
var BUCIMEParser = (function () {
    function BUCIMEParser(initials, finals, keymap) {
        this.initials = initials;
        this.finals = finals;
        this.keymap = keymap;
        this.mapping = this.generateKeyMapping();
        console.log(this.mapping);
        this.index = this.generateIndex();
        console.log(this.index);
    }
    BUCIMEParser.prototype.generateKeyMapping = function () {
        var keys = Object.keys(this.keymap);
        var mapping = [];
        for (var i = 0; i < keys.length; ++i) {
            var currentLatin = keys[i];
            var letters = this.keymap[keys[i]];
            for (var j = 0; j < letters.length; ++j) {
                mapping.push([letters[j], currentLatin]);
            }
        }
        mapping.sort(function (a, b) {
            return b[0].length - a[0].length;
        });
        return mapping;
    };
    BUCIMEParser.prototype.convertToLatin = function (s) {
        function isMatch(pos, pattern) {
            return s.slice(pos).startsWith(pattern);
        }
        var result = '';
        var i = 0;
        while (i < s.length) {
            var found = false;
            for (var j = 0; j < this.mapping.length; ++j) {
                if (isMatch(i, this.mapping[j][0])) {
                    result = result + this.mapping[j][1];
                    i = i + this.mapping[j][0].length;
                    found = true;
                    break;
                }
            }
            if (!found) {
                throw "Error parsing";
            }
        }
        return result;
    };
    BUCIMEParser.prototype.generateIndex = function () {
        var _this = this;
        var mesh = [];
        var cc = function (s) { return _this.convertToLatin(s); };
        for (var i = 0; i < this.initials.length; ++i) {
            mesh.push([this.initials[i], cc(this.initials[i])]);
        }
        var vs = this.finals;
        for (var i = 0; i < Object.keys(vs).length; ++i) {
            mesh.push([Object.keys(vs)[i], cc(Object.keys(vs)[i])]);
            var tones = vs[Object.keys(vs)[i]];
            for (var j = 0; j < tones.length; ++j) {
                if (typeof tones[j] == "string") {
                    mesh.push([tones[j], cc(tones[j])]);
                }
            }
        }
        mesh.sort(function (a, b) {
            return (b[1].length - a[1].length);
        });
        return mesh;
    };
    BUCIMEParser.prototype.matchString = function (s) {
        var _this = this;
        function longestMatch(s, pattern) {
            if (s.startsWith(pattern)) {
                return pattern.length;
            }
            for (var i = -1;; i--) {
                if (s.startsWith(pattern.slice(0, i))) {
                    return pattern.length + i;
                }
            }
        }
        function multiplyStr(s, arr) {
            var tmp = [];
            for (var i = 0; i < arr.length; ++i) {
                tmp.push(s + arr[i]);
            }
            return tmp;
        }
        var tryMatch = function (s) {
            var result = [];
            for (var i = 0; i < _this.index.length; ++i) {
                var lenMatched = longestMatch(s, _this.index[i][1]);
                if (lenMatched == 0) {
                    continue;
                }
                if (lenMatched < _this.index[i][1].length) {
                }
                else {
                    if (s.length - lenMatched > 0) {
                        var tmp = tryMatch(s.slice(lenMatched));
                        tmp = multiplyStr(_this.index[i][0], tmp);
                        result = result.concat(tmp);
                    }
                    else {
                        result.push(_this.index[i][0]);
                    }
                }
            }
            return result;
        };
        var suggestions = tryMatch(s);
        suggestions.sort(function (a, b) {
            return b.length - a.length;
        });
        var unique = suggestions.filter(function (elem, index, self) {
            return index == self.indexOf(elem);
        });
        return unique;
    };
    return BUCIMEParser;
}());
exports.BUCIMEParser = BUCIMEParser;
