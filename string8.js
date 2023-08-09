const inputString = 'Hello Привет';

const matches = inputString.match(/[a-zа-я]/gi);

const totalMatches = matches.length;

console.log('Total number of small Latin and Cyrillic letters:', totalMatches);
