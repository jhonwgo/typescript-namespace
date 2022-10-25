//https://www.w3schools.blog/namespaces-typescript
//https://khalilstemmler.com/blogs/typescript/node-starter-project/


/// <reference path="Validation.ts" />
/// <reference path="LettersValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
//Some samples to try
let strings = ["You", "53454", "Hello"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

//Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log(`"${ s }" - ${ validators[name].isValid(s) ? "Valid" : "Invalid" } ${ name }`);
    }
}
