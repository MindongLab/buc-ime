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
    /*溝*/ 'eu': ['ĕu', 'ēu', 'áiu', 'áiuh', 'èu', 'âiu', 'ĕuh']
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
