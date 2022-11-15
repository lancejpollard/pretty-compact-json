# Pretty Compact JSON

JavaScript library for prettifying JSON in a compact, more human-readable way.

```
yarn add @lancejpollard/pretty-compact-json.js
```

<!-- prettier-ignore -->
```js
const prettify1 = require("@lancejpollard/pretty-compact-json.js/1");
const prettify2 = require("@lancejpollard/pretty-compact-json.js/2");
```

Given this input:

```json
{
  "a": [
    {
      "name": "foo",
      "value": 123
    }
  ],
  "b": {
    "x": [1, 2, 3],
    "y": {
      "z": 10
    },
    "w": {
      "a": {
        "b": {
          "c": 456,
          "d": 789,
          "e": "hello world",
          "f": { "g": true, "p": [1, { "q": 2, "v": "bar" }, 3] }
        }
      }
    }
  },
  "c": [{ "a": { "b": 111, "c": 222 } }, 1, null, { "x": 3 }],
  "d": "random"
}
```

```js
prettify1(input);
```

<!-- prettier-ignore -->
```json
{
  "a": [
    {
      "name": "foo",
      "value": 123 } ],
  "b": {
    "x": [ 1, 2, 3 ],
    "y": {
      "z": 10 },
    "w": {
      "a": {
        "b": {
          "c": 456,
          "d": 789,
          "e": "hello world",
          "f": {
            "g": true,
            "p": [
              1,
              {
                "q": 2,
                "v": "bar" },
              3 ] } } } } },
  "c": [
    {
      "a": {
        "b": 111,
        "c": 222 } },
    1,
    null,
    {
      "x": 3 } ],
  "d": "random" }
```

<!-- prettier-ignore -->
```js
prettify2(input)
```

<!-- prettier-ignore -->
```json
{ "a": [ { "name": "foo",
           "value": 123 } ],
  "b": { "x": [ 1, 2, 3 ],
         "y": { "z": 10 },
         "w": { "a": { "b": { "c": 456,
                              "d": 789,
                              "e": "hello world",
                              "f": { "g": true,
                                     "p": [ 1,
                                            { "q": 2,
                                              "v": "bar" },
                                            3 ] } } } } },
  "c": [ { "a": { "b": 111,
                  "c": 222 } },
         1,
         null,
         { "x": 3 } ],
  "d": "random" }
```
