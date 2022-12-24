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

function getLetter(s) {
    let letter;
    const setA = new Set(['a', 'e', 'i', 'o', 'u'])
    const setB = new Set(['b', 'c', 'd', 'f', 'g'])
    const setC = new Set(['h', 'j', 'k', 'l', 'm'])
    const setD = new Set(['n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'])
    
    if (setA.has(s[0])) {
        letter = 'A'      
    } else if(setB.has(s[0])) {
        letter = 'B'
    } else if(setC.has(s[0])) {
        letter = 'C'
    } else if(setD.has(s[0])) {
        letter = 'D'
    }
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}