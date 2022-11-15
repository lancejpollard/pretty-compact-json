
const prettify = require('.')

console.log(prettify({
  a: [
    {
      name: 'foo',
      value: 123
    }
  ],
  b: {
    x: [1, 2, 3],
    y: {
      z: 10
    }
  }
}))
