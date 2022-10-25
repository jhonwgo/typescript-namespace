/// <reference path="Validation.ts" />
namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isValid (s: string) {
            return lettersRegexp.test(s);
        }
    }
}

