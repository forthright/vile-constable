# vile-constable

A [vile](http://vile.io) plugin for keeping up to date [bower](https://bower.io) dependencies via [constable](http://github.com/brentlintner/constable).

## Requirements

- [nodejs](http://nodejs.org)
- [npm](http://npmjs.org)

## Installation

    npm i -D vile vile-constable

## Restrictions

Currently, you need to have your `bower.json` in the `cwd` of
where you call `vile ...`.

## Versioning

This project ascribes to [semantic versioning](http://semver.org).

## Licensing

This project is licensed under the [MPL-2.0](LICENSE) license.

Any contributions made to this project are made under the current license.

## Contributions

Current list of [Contributors](https://github.com/forthright/vile-constable/graphs/contributors).

Any contributions are welcome and appreciated!

All you need to do is submit a [Pull Request](https://github.com/forthright/vile-constable/pulls).

1. Please consider tests and code quality before submitting.
2. Please try to keep commits clean, atomic and well explained (for others).

### Issues

Current issue tracker is on [GitHub](https://github.com/forthright/vile-constable/issues).

Even if you are uncomfortable with code, an issue or question is welcome.

### Code Of Conduct

This project ascribes to [contributor-covenant.org](http://contributor-covenant.org).

By participating in this project you agree to our [Code of Conduct](CODE_OF_CONDUCT.md).

### Maintainers

- Brent Lintner - [@brentlintner](http://github.com/brentlintner)

## Architecture

- `src` is es6+ syntax compiled with [babel](https://babeljs.io)
- `lib` generated js library

## Hacking

    cd vile-constable
    npm install
    npm run dev
    npm test
