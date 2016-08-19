(function() {
    'use strict';

    // All cons
    var cons = ['b', 'p', 'm', 'd', 't', 'n', 'l', 'g', 'k', 'ng', 'h', 'c', 'ch', 's'];


    // All vowel combinations
    // @todo: 未區分韻尾
    // 每行一個韻母
    // 格式： 原型: [上平， 上聲， 上去 ， 上入， 下平， 下去，   下入]
    var vs =
        {
            'a':   ['ă',   'ā',   'á',   'ăh',   'à',   'â',   'áh'],
            'a̤':   ['ă̤',   'ā̤',   'á̤',   'ă̤h',   'à̤',   'â̤',   'á̤h'],
            'e':   ['ĕ',   'ē',   'é',   'ĕk',   'è',   'ê',   'ék'],
            'e̤':   ['ĕ̤',   'ē̤',   'é̤',   'ĕh',   'è̤',   'ê̤',   'é̤h'],
            'i':   ['ĭ',   'ī',   null,  'ĭh',   'ì',   null,  null],
            'o':   ['ŏ',   'ō',   'ó',   'ŏk',   'ò',   'ô',   'ók'],
            'o̤':   ['ŏ̤',   'ō̤',   'ó̤',   'ŏ̤h',   'ò̤',   'ô̤',   'ó̤h'],
            'u':   ['ŭ',   'ū',   null,  'ŭk',   'ù',   null,  null],
            'ṳ':   ['ṳ̆',   'ṳ̄',   null,  'ṳ̆k',   'ṳ̀',   null,  null],
            'ai':  ['ăi',  'āi',  'ái',  'ăih',  'ài',  'âi',  'áih'],
            'aiu': ['ăiu', 'āiu', 'áiu', 'ăiuh', 'àiu', 'âiu', 'áiuh'],
            'au':  ['ău',  'āu',  'áu',  'ăuh',  'àu',  'âu',  'áuh'],
            'ae̤':  ['ăe̤',  'āe̤',  'áe̤',  'ăe̤h',  'àe̤',  'âe̤',  'áe̤h'],
            'eu':  ['ĕu',  'ēu',  'éu',  'ĕuk',  'èu',  'êu',  'éuk'],
            'e̤ṳ':  ['ĕ̤u',  'ē̤u',  'é̤u',  'ĕuh',  'è̤u',  'ê̤u',  'é̤uh'],
            'ia':  ['iă',  'iā',  'iá',  'iăh',  'ià',  'iâ',  'iáh'],
            'ie':  ['iĕ',  'iē',  'ié',  'iĕk',  'iè',  'iê',  'iék'],
            'ieu': ['iĕu', 'iēu', 'iéu', 'iĕuk', 'ièu', 'iêu', 'iéuk'],
            'io':  ['iŏ',  'iō',  'ió',  'iŏk',  'iò',  'iô',  'iók'],
            'iu':  ['iŭ',  'iū',  null,  'iŭk',  'iù',  null,  null],
            'oi':  ['ŏi',  'ōi',  'ói',  'ŏik',  'òi',  'ôi',  'óik'],
            'o̤i':  ['ŏ̤i',  'ō̤i',  'ó̤i',  'ŏ̤ih',  'ò̤i',  'ô̤i',  'ó̤ih'],
            'ua':  ['uă',  'uā',  'uá',  'uăh',  'uà',  'uâ',  'uáh'],
            'uai': ['uăi', 'uāi', 'uái', 'uăih', 'uài', 'uâi', 'uáih'],
            'ui':  ['ŭi',  'ūi',  null,  'ŭik',  'ùi',  null,  null],
            'uoi': ['uŏi', 'uōi', 'uói', 'uŏik', 'uòi', 'uôi', 'uóik'],
            'uo':  ['ŭo',  'ūo',  null,  'ŭok',  'ùo',  null,  null]
        };


    // Key mapping (without tones)
    // Note that letters with dots are more than one unicode glyph
    var keymap =
        {
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

    // 生成字母和帶標調字母調映射表
    // @return: [ [帶標字母, 無標字母], ...]
    function generateKeyMapping() {
        var keys = Object.keys(keymap);
        var mapping = [];
        for (var i = 0; i < keys.length; ++i) {
            var currentLatin = keys[i];
            var letters = keymap[keys[i]];
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
    window.cc = function (s) { return convertToLatin(s, generateKeyMapping()) };

}());




