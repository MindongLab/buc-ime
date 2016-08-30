/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var data = __webpack_require__(1);
	var parser_1 = __webpack_require__(2);
	var parser = new parser_1.BUCIMEParser(data.initials, data.finals, data.keymap);
	window.bucime = {
	    parser: parser
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	exports.initials = ['b', 'p', 'm', 'd', 't', 'n', 'l', 'g', 'k', 'ng', 'h', 'c', 'ch', 's'];
	exports.finals = {
	    'ung': ['ŭng', 'ūng', 'óng', 'ók', 'ùng', 'ông', 'ŭk'],
	    'ua': ['uă', 'uā', 'uá', 'uáh', 'uà', 'uâ', 'uăh'],
	    'iong': ['iŏng', 'iōng', 'ióng', 'iók', 'iòng', 'iông', 'iŏk'],
	    'iu': ['iŭ', 'iū', 'éu', 'éuh', 'iù', 'êu', null],
	    'ang': ['ăng', 'āng', 'áng', 'áh', 'àng', 'âng', 'ăk'],
	    'ai': ['ăi', 'āi', 'ái', 'áih', 'ài', 'âi', 'ăih'],
	    'a': ['ă', 'ā', 'á', 'ăh', 'à', 'â', 'ăh'],
	    'ing': ['ĭng', 'īng', 'éng', 'ék', 'ìng', 'êng', 'ĭk'],
	    'uang': ['uăng', 'uāng', 'uáng', 'uák', 'uàng', 'uâng', 'uăk'],
	    'o̤': ['ŏ̤', 'ō̤', 'ó̤', 'ó̤h', 'ò̤', 'ô̤', 'ŏ̤h'],
	    'ṳ': ['ṳ̆', 'ṳ̄', 'é̤ṳ', 'é̤uh', 'ṳ̀', 'ê̤ṳ', 'ṳ̆h'],
	    'uoi': ['uŏi', 'uōi', 'uói', 'uóih', 'ùoi', 'uôi', null],
	    'u': ['ŭ', 'ū', 'ó', 'óh', 'ù', 'ô', 'ŭh'],
	    'eng': ['ĕng', 'ēng', 'áing', 'áik', 'èng', 'âing', 'ĕk'],
	    'uong': ['uŏng', 'uōng', 'uóng', 'uók', 'uòng', 'uông', 'uŏk'],
	    'ui': ['ŭi', 'ūi', 'ói', 'óih', 'ùi', 'ôi', 'ŭih'],
	    'ieu': ['iĕu', 'iēu', 'iéu', 'iéuh', 'ièu', 'iêu', null],
	    'ṳng': ['ṳ̆ng', 'ṳ̄ng', 'é̤ṳng', 'é̤ṳk', 'ṳ̀ng', 'ê̤ṳng', 'ṳ̆k'],
	    'ong': ['ŏng', 'ōng', 'áung', 'áuk', 'òng', 'âung', 'ŏk'],
	    'i': ['ĭ', 'ī', 'é', 'éh', 'ì', 'ê', 'ĭh'],
	    'e̤ng': ['ĕ̤ng', 'ē̤ng', 'áe̤ng', 'áe̤k', 'è̤ng', 'âe̤ng', 'ĕ̤k'],
	    'au': ['ău', 'āu', 'áu', 'áuh', 'àu', 'âu', 'ăuh'],
	    'uo': ['ŭo', 'ūo', 'uó', 'ŭok', 'ùo', 'uô', 'uŏh'],
	    'a̤': ['ă̤', 'ā̤', 'á̤', 'á̤h', 'à̤', 'â̤', 'ă̤h'],
	    'io': ['iŏ', 'iō', 'ió', 'ióh', 'iò', 'iô', 'iŏh'],
	    'ie': ['iĕ', 'iē', 'ié', 'iéh', 'iè', 'iê', 'iĕh'],
	    'iang': ['iăng', 'iāng', 'iáng', 'iák', 'iàng', 'iâng', 'iăk'],
	    'oi': ['ŏi', 'ōi', 'ó̤i', 'ó̤ih', 'òi', 'ô̤i', 'ŏih'],
	    'e̤': ['ĕ̤', 'ē̤', 'áe̤', 'áe̤h', 'è̤', 'âe̤', 'ĕ̤h'],
	    'ieng': ['iĕng', 'iēng', 'iéng', 'iék', 'ièng', 'iêng', 'iĕk'],
	    'ia': ['iă', 'iā', 'iá', 'iáh', 'ià', 'iâ', 'iăk'],
	    'uai': ['uăi', 'uāi', 'uái', 'uáih', 'uài', 'uâi', 'uăih'],
	    'eu': ['ĕu', 'ēu', 'áiu', 'áiuh', 'èu', 'âiu', 'ĕuh'],
	};
	exports.keymap = {
	    'a': ['a', 'ă', 'ā', 'á', 'à', 'â', 'a̤', 'ă̤', 'ā̤', 'á̤', 'à̤', 'â̤'],
	    'b': ['b'],
	    'c': ['c'],
	    'd': ['d'],
	    'e': ['e', 'ĕ', 'ē', 'é', 'è', 'ê', 'e̤', 'ĕ̤', 'ē̤', 'é̤', 'è̤', 'ê̤'],
	    'f': ['f'],
	    'g': ['g'],
	    'h': ['h'],
	    'i': ['i', 'ĭ', 'ī', 'ì'],
	    'j': ['j'],
	    'k': ['k'],
	    'l': ['l'],
	    'm': ['m'],
	    'n': ['n'],
	    'o': ['o', 'ŏ', 'ō', 'ó', 'ò', 'ô', 'o̤', 'ŏ̤', 'ō̤', 'ó̤', 'ò̤', 'ô̤'],
	    'p': ['p'],
	    'q': ['q'],
	    'r': ['r'],
	    's': ['s'],
	    't': ['t'],
	    'u': ['u', 'ŭ', 'ū', 'ù', 'ṳ', 'ṳ̆', 'ṳ̄', 'ṳ̀'],
	    'v': ['v'],
	    'w': ['w'],
	    'x': ['x'],
	    'y': ['y'],
	    'z': ['z']
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);