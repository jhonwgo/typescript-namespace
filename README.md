# TypeScript Namespaces Example

This is a simple example of how to use TypeScript namespaces.

based on:

- [w3schools](https://www.w3schools.blog/namespaces-typescript) namespaces typescript example.
- [khalilstemmler](https://khalilstemmler.com/blogs/typescript/node-starter-project/) node starter project.

## Resources
- [DevTools](https://github.com/jhonwgo/devtools) Docker Image for Development.


## Getting Started

1. Start DevTools from docker image, see [DevTools](https://github.com/jhonwgo/devtools) for more information.
2. Enter to the container.
3. Clone this repository.
4. Enter to the project folder.
5. Install dependencies.
```bash
npm install
```
6. Run the project.
```bash
npm run start
```
7. Error:
```bash
> prueba2@1.0.0 start
> npm run build && node build/index.js


> prueba2@1.0.0 build
> rimraf ./build && tsc

/tmp/TypeScript-namespace/build/index.js:11
validators["ZIP code"] = new Validation.ZipCodeValidator();
                             ^

ReferenceError: Validation is not defined
    at Object.<anonymous> (/tmp/TypeScript-namespace/build/index.js:11:30)
    at Module._compile (node:internal/modules/cjs/loader:1155:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
    at Module.load (node:internal/modules/cjs/loader:1033:32)
    at Function.Module._load (node:internal/modules/cjs/loader:868:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:22:47
```
