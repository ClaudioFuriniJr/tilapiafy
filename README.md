# tilapiafy

![npm](https://img.shields.io/npm/v/tilapiafy.svg)

Generates pictures of tilapias.

## Install

```
$ npm install tilapiafy
```

## Usage

```js
const tilapia = require("tilapiafy");

tilapia("So much space!");
//=> "Somuchspace!"

tilapia(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
