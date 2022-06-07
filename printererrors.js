// This is the link to this JavaScript Challenge
// https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript

function printerError(s) {
    let alphabet = 'abcdefghijklm';

    counter = 0
    for(i=0; i<=s.length-1; i++){
        for(j=0; j<=alphabet.length-1; j++){
            if(s[i] == alphabet[j]){
                counter++
                break
            } 
        }
    }
    console.log(`The printer error of ${s} is ${s.length-counter}/${s.length}: ${((s.length-counter)/(s.length)*100).toFixed(2)}%`)
}
printerError('aaabbbbhaijjjm')
console.log('=====')
printerError('aaaxbbbbyyhwawiwjjjwwm')
printerError('abcdex')
console.log('=====')