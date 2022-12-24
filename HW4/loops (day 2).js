'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowel = new Set(['a', 'i', 'o', 'e', 'u'])
    const consonant = new Set(['b', 'c', 'd', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 's', 't', 'v', 'x', 'z', 'h', 'r', 'w', 'y'])
    for(let i = 0; i < s.length; i++) {
        if (vowel.has(s[i])) {
            console.log(s[i])
        }
    }
    
    for(let i = 0; i < s.length; i++) {
        if (consonant.has(s[i])) {
            console.log(s[i])
        }
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}