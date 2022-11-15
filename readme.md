# Pretty Compact JSON

JavaScript library for prettifying JSON in a compact, more human-readable way.

```
yarn add @lancejpollard/pretty-compact-json.js
```

```js
const prettify = require("@lancejpollard/pretty-compact-json.js");

console.log(
  prettify({
    a: [
      {
        name: "foo",
        value: 123,
      },
    ],
    b: {
      x: [1, 2, 3],
      y: {
        z: 10,
      },
    },
  })
);

// {
//   "a": [
//     {
//       "name": "foo",
//       "value": 123 } ],
//   "b": {
//     "x": [ 1, 2, 3 ],
//     "y": {
//       "z": 10 } } }
```
