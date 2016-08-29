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
	// All cons
	exports.initials = ['b', 'p', 'm', 'd', 't', 'n', 'l', 'g', 'k', 'ng', 'h', 'c', 'ch', 's'];
	// All vowel combinations
	// @todo: 未區分韻尾
	// 每行一個韻母
	// 格式： 原型: [上平， 上聲， 上去 ， 下入， 下平， 下去，   上入]
	exports.finals = {
	    /*春*/ 'ung': ['ŭng', 'ūng', 'óng', 'ók', 'ùng', 'ông', 'ŭk'],
	    /*花*/ 'ua': ['uă', 'uā', 'uá', 'uáh', 'uà', 'uâ', 'uăh'],
	    /*香*/ 'iong': ['iŏng', 'iōng', 'ióng', 'iók', 'iòng', 'iông', 'iŏk'],
	    /*秋*/ 'iu': ['iŭ', 'iū', 'éu', 'éuh', 'iù', 'êu', null],
	    /*山*/ 'ang': ['ăng', 'āng', 'áng', 'áh', 'àng', 'âng', 'ăk'],
	    /*開*/ 'ai': ['ăi', 'āi', 'ái', 'áih', 'ài', 'âi', 'ăih'],
	    /*嘉*/ 'a': ['ă', 'ā', 'á', 'ăh', 'à', 'â', 'ăh'],
	    /*賓*/ 'ing': ['ĭng', 'īng', 'éng', 'ék', 'ìng', 'êng', 'ĭk'],
	    /*歡*/ 'uang': ['uăng', 'uāng', 'uáng', 'uák', 'uàng', 'uâng', 'uăk'],
	    /*歌*/ 'o̤': ['ŏ̤', 'ō̤', 'ó̤', 'ó̤h', 'ò̤', 'ô̤', 'ŏ̤h'],
	    /*須*/ 'ṳ': ['ṳ̆', 'ṳ̄', 'é̤ṳ', 'é̤uh', 'ṳ̀', 'ê̤ṳ', 'ṳ̆h'],
	    /*杯*/ 'uoi': ['uŏi', 'uōi', 'uói', 'uóih', 'ùoi', 'uôi', null],
	    /*孤*/ 'u': ['ŭ', 'ū', 'ó', 'óh', 'ù', 'ô', 'ŭh'],
	    /*燈*/ 'eng': ['ĕng', 'ēng', 'áing', 'áik', 'èng', 'âing', 'ĕk'],
	    /*光*/ 'uong': ['uŏng', 'uōng', 'uóng', 'uók', 'uòng', 'uông', 'uŏk'],
	    /*輝*/ 'ui': ['ŭi', 'ūi', 'ói', 'óih', 'ùi', 'ôi', 'ŭih'],
	    /*燒*/ 'ieu': ['iĕu', 'iēu', 'iéu', 'iéuh', 'ièu', 'iêu', null],
	    /*銀*/ 'ṳng': ['ṳ̆ng', 'ṳ̄ng', 'é̤ṳng', 'é̤ṳk', 'ṳ̀ng', 'ê̤ṳng', 'ṳ̆k'],
	    /*缸*/ 'ong': ['ŏng', 'ōng', 'áung', 'áuk', 'òng', 'âung', 'ŏk'],
	    /*之*/ 'i': ['ĭ', 'ī', 'é', 'éh', 'ì', 'ê', 'ĭh'],
	    /*東*/ 'e̤ng': ['ĕ̤ng', 'ē̤ng', 'áe̤ng', 'áe̤k', 'è̤ng', 'âe̤ng', 'ĕ̤k'],
	    /*郊*/ 'au': ['ău', 'āu', 'áu', 'áuh', 'àu', 'âu', 'ăuh'],
	    /*過*/ 'uo': ['ŭo', 'ūo', 'uó', 'ŭok', 'ùo', 'uô', 'uŏh'],
	    /*西*/ 'a̤': ['ă̤', 'ā̤', 'á̤', 'á̤h', 'à̤', 'â̤', 'ă̤h'],
	    /*橋*/ 'io': ['iŏ', 'iō', 'ió', 'ióh', 'iò', 'iô', 'iŏh'],
	    /*鷄*/ 'ie': ['iĕ', 'iē', 'ié', 'iéh', 'iè', 'iê', 'iĕh'],
	    /*聲*/ 'iang': ['iăng', 'iāng', 'iáng', 'iák', 'iàng', 'iâng', 'iăk'],
	    /*催*/ 'oi': ['ŏi', 'ōi', 'ó̤i', 'ó̤ih', 'òi', 'ô̤i', 'ŏih'],
	    /*初*/ 'e̤': ['ĕ̤', 'ē̤', 'áe̤', 'áe̤h', 'è̤', 'âe̤', 'ĕ̤h'],
	    /*天*/ 'ieng': ['iĕng', 'iēng', 'iéng', 'iék', 'ièng', 'iêng', 'iĕk'],
	    /*奇*/ 'ia': ['iă', 'iā', 'iá', 'iáh', 'ià', 'iâ', 'iăk'],
	    /*歪*/ 'uai': ['uăi', 'uāi', 'uái', 'uáih', 'uài', 'uâi', 'uăih'],
	    /*溝*/ 'eu': ['ĕu', 'ēu', 'áiu', 'áiuh', 'èu', 'âiu', 'ĕuh'],
	};
	// Key mapping (without tones)
	// Note that letters with dots are more than one unicode glyph
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
	    // 生成字母和帶標調字母調映射表
	    // @return: [ [帶標字母, 無標字母], ...]
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
	    // 去除聲調和下標點
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
	    // 生成索引
	    BUCIMEParser.prototype.generateIndex = function () {
	        var _this = this;
	        var mesh = [];
	        // Shorthand
	        var cc = function (s) { return _this.convertToLatin(s); };
	        for (var i = 0; i < this.initials.length; ++i) {
	            mesh.push([this.initials[i], cc(this.initials[i])]);
	        }
	        var vs = this.finals;
	        for (var i = 0; i < Object.keys(vs).length; ++i) {
	            mesh.push([Object.keys(vs)[i], cc(Object.keys(vs)[i])]);
	            var tones = vs[Object.keys(vs)[i]];
	            for (var j = 0; j < tones.length; ++j) {
	                // Don't add null
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
	    };
	    // @return: array of suggestions
	    // 無模糊查詢
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