// 'use strict';
//this file is not included in the build.
//use it for messing around.
var nlp = require('./src/index');
// nlp.verbose('tagger');
// const corpus = require('nlp-corpus');
// let sotu = corpus.sotu.parsed()[23];
const fresh = require('./test/unit/lib/freshPrince.js');

// bug.1
//  .? vs *

// nlp('is this').sentences(0).toNegative().debug();

// nlp('I\'m going to the shops').sentences().toPastTense().debug();


// let r = nlp.tokenize('5th - 7th').tag('NumberRange').debug();
// r.contractions().debug();

//===timer
// console.time('parse');
// let r = nlp(fresh);
// console.timeEnd('parse');
//
// console.time('match');
// r.match('#Determiner (story|thing|#Adjective)', true);
// console.timeEnd('match');
//
// console.time('tag');
// r.tag('#Person');
// console.timeEnd('tag');

let str = 'hello there. I work for the F.B.I. in ft. Mede. hello there!';
let r = nlp(str);
let o = r.sentences(1).out('offsets')[0];
console.log(o);
console.log(str.substring(o.wordStart, o.wordEnd));
