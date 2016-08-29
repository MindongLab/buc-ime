"use strict";
var data = require('./src/data');
(function () {
    'use strict';
    // 生成字母和帶標調字母調映射表
    // @return: [ [帶標字母, 無標字母], ...]
    function generateKeyMapping() {
        var keys = Object.keys(data.keymap);
        var mapping = [];
        for (var i = 0; i < keys.length; ++i) {
            var currentLatin = keys[i];
            var letters = data.keymap[keys[i]];
            for (var j = 0; j < letters.length; ++j) {
                mapping.push([letters[j], currentLatin]);
            }
        }
        mapping.sort(function (a, b) {
            return b[0].length - a[0].length;
        });
        return mapping;
    }
    window.mm = generateKeyMapping();
    // 去除聲調和下標點
    function convertToLatin(s, mapping) {
        function isMatch(pos, pattern) {
            return s.slice(pos).startsWith(pattern);
        }
        var result = '';
        var i = 0;
        while (i < s.length) {
            var found = false;
            for (var j = 0; j < mapping.length; ++j) {
                if (isMatch(i, mapping[j][0])) {
                    result = result + mapping[j][1];
                    i = i + mapping[j][0].length;
                    found = true;
                    break;
                }
            }
            if (!found) {
                throw "Error parsing";
            }
        }
        return result;
    }
    window.cc = function (s) { return convertToLatin(s, generateKeyMapping()); };
    function generateIndex() {
        var mesh = [];
        var cc = function (s) { return convertToLatin(s, generateKeyMapping()); };
        for (var i = 0; i < data.initials.length; ++i) {
            mesh.push([data.initials[i], cc(data.initials[i])]);
        }
        var vs = data.finals;
        for (var i = 0; i < Object.keys(vs).length; ++i) {
            mesh.push([Object.keys(vs)[i], cc(Object.keys(vs)[i])]);
            var tones = vs[Object.keys(vs)[i]];
            for (var j = 0; j < tones.length; ++j) {
                if (typeof tones[j] == "string") {
                    mesh.push([tones[j], cc(tones[j])]);
                }
            }
        }
        // @todo: remove duplicate
        mesh.sort(function (a, b) {
            return (b[1].length - a[1].length); // @todo second ordering
        });
        return mesh;
    }
    // @return: array of suggestions
    // 無模糊查詢
    function matchString(s, index) {
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
        function tryMatch(s) {
            var result = [];
            for (var i = 0; i < index.length; ++i) {
                var lenMatched = longestMatch(s, index[i][1]);
                if (lenMatched == 0) {
                    continue;
                }
                if (lenMatched < index[i][1].length) {
                }
                else {
                    if (s.length - lenMatched > 0) {
                        var tmp = tryMatch(s.slice(lenMatched));
                        tmp = multiplyStr(index[i][0], tmp);
                        result = result.concat(tmp);
                    }
                    else {
                        result.push(index[i][0]);
                    }
                }
            }
            return result;
        }
        var suggestions = tryMatch(s);
        suggestions.sort(function (a, b) {
            return b.length - a.length;
        });
        var unique = suggestions.filter(function (elem, index, self) {
            return index == self.indexOf(elem);
        });
        return unique;
    }
    var index = generateIndex();
    console.log(index);
    window.mt = function (s) { return matchString(s, index); };
}());
