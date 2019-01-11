
## Install
```
yarn add curry-and-partial
```
## How to use
```
import { curry, partial } from 'curry-and-partial';

function sum(a, b) {
    return a + b;
}

let result = curry(sum)(2)(1); // 3

let prettyPrintJson = partial(JSON.stringify, undefined, null, 2);
prettyPrintJson(obj1); 
// {
  // "foo": "bar",
  // "bar": "foo"
// }
```