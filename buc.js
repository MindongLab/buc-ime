var d;
// All cons
var cons = ['b', 'p', 'm', 'd', 't', 'n', 'l', 'g', 'k', 'ng', 'h', 'c', 'ch', 's'];


// All vowel combinations
// @todo: 未區分韻尾
var vs = 
{
 'a'  : [ 'ă',  'ā',  'á',  'ăh',  'à',  'â',  'áh'],
 'a̤'  : [ 'ă̤',  'ā̤',  'á̤',  'ă̤h',  'à̤',  'â̤',  'á̤h'],
 'e'  : [ 'ĕ',  'ē',  'é',  'ĕk',  'è',  'ê',  'ék'],
 'e̤'  : [ 'ĕ̤',  'ē̤',  'é̤',  'ĕh',  'è̤',  'ê̤',  'é̤h'],
 'i'  : [ 'ĭ', 	'ī', null,  'ĭh',  'ì', null,  null],
 'o'  : [ 'ŏ',  'ō',  'ó',  'ŏk',  'ò',  'ô',  'ók'],
 'o̤'  : [ 'ŏ̤',  'ō̤',  'ó̤',  'ŏ̤h',  'ò̤',  'ô̤',  'ó̤h'],
 'u'  : [ 'ŭ',  'ū', null,  'ŭk',  'ù', null,  null],
 'ṳ'  : [ 'ṳ̆',  'ṳ̄', null,  'ṳ̆k',  'ṳ̀', null,  null],
 'ai' : ['ăi', 'āi', 'ái', 'ăih', 'ài', 'âi', 'áih'],
 'aiu': ['ăiu','āiu','áiu','ăiuh','àiu','âiu','áiuh'],
 'au' : ['ău', 'āu', 'áu', 'ăuh', 'àu', 'âu', 'áuh'],
 'ae̤' : ['ăe̤', 'āe̤', 'áe̤', 'ăe̤h', 'àe̤', 'âe̤', 'áe̤h'],
 'eu' : ['ĕu',  'ēu',  'éu',  'ĕuk',  'èu',  'êu',  'éuk'],
 'e̤ṳ' : ['ĕ̤u',  'ē̤u',  'é̤u',  'ĕuh',  'è̤u',  'ê̤u',  'é̤uh'],
 'ia' : ['iă', 'iā', 'iá', 'iăh', 'ià', 'iâ', 'iáh'],
 'ie' : ['iĕ',  'iē',  'ié',  'iĕk',  'iè',  'iê',  'iék'],
 'ieu': ['iĕu',  'iēu',  'iéu',  'iĕuk',  'ièu',  'iêu',  'iéuk'],
 'io' : ['iŏ',  'iō',  'ió',  'iŏk',  'iò',  'iô',  'iók'],
 'iu' : ['iŭ',  'iū', null,  'iŭk',  'iù', null,  null],
 'oi' : [ 'ŏi',  'ōi',  'ói',  'ŏik',  'òi',  'ôi',  'óik'],
 'o̤i' : [ 'ŏ̤i',  'ō̤i',  'ó̤i',  'ŏ̤ih',  'ò̤i',  'ô̤i',  'ó̤ih'],
 'ua' : ['uă', 'uā', 'uá', 'uăh', 'uà', 'uâ', 'uáh'],
 'uai': ['uăi', 'uāi', 'uái', 'uăih', 'uài', 'uâi', 'uáih'],
 'ui' : ['ŭi',  'ūi', null,  'ŭik',  'ùi', null,  null],
 'uoi': ['uŏi',  'uōi',  'uói',  'uŏik',  'uòi',  'uôi',  'uóik'],
 'uo' : ['ŭo',  'ūo', null,  'ŭok',  'ùo', null,  null]
};

Ĭĭ

// Key mapping (without tones)
var keymap = 
{'a' : ['a','a̤'],
'b': ['b'],
'e' : ['e','e̤'],
'o' : ['o','o̤'],
'u' : ['u','ṳ'],
}

