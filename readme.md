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
      w: {
        a: {
          b: {
            c: 456,
            d: 789,
            e: "hello world",
            f: { g: true, p: [1, { q: 2 }, 3] },
          },
        },
      },
    },
    c: [{ a: { b: 111, c: 222 } }, 1, null, { x: 3 }],
    d: "random",
  })
);

// { "a": [ { "name": "foo",
//            "value": 123 } ],
//   "b": { "x": [ 1, 2, 3 ],
//          "y": { "z": 10 },
//          "w": { "a": { "b": { "c": 456,
//                               "d": 789,
//                               "e": "hello world",
//                               "f": { "g": true,
//                                      "p": [ 1,
//                                             { "q": 2 },
//                                             3 ] } } } } },
//   "c": [ { "a": { "b": 111,
//                   "c": 222 } },
//          1,
//          null,
//          { "x": 3 } ],
//   "d": "random" }
```
