# vile-constable

A [vile](http://vile.io) plugin for [constable](http://github.com/brentlintner/constable).

## Requirements

- [nodejs](http://nodejs.org)
- [npm](http://npmjs.org)

## Installation

    npm i vile-constable

## Restrictions

Currently, you need to have your `bower.json` in the `cwd` of
where you call `vile ...`.

## Architecture

- `src` is es6+ syntax compiled with [babel](https://babeljs.io)
- `lib` generated js library

## Hacking

    cd vile-constable
    npm install
    npm run dev
    npm test
