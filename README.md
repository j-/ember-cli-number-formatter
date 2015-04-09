# ember-cli-number-formatter

Expose [number-formatter][npm] npm package to [Ember CLI][cli] app.

## Installation

```sh
$ ember install:addon ember-cli-number-formatter
```

## Usage

```js
import format from 'number-formatter';
console.log(format('#.##', Math.PI)); // -> "3.14"
```

## License

MIT

[npm]: https://www.npmjs.com/package/number-formatter
[cli]: http://www.ember-cli.com/
