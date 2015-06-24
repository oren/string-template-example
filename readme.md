# Example for text templates in JS/Node

## Run

    npm install
    node index.js

    => Hello Robert, you have 12 unread messages!


```js
var fs = require('fs');
var format = require("string-template")
var greeting;
var template = fs.readFileSync('template.txt', 'utf8');

greeting = format(template, {
      name: "Robert",
      count: 12
})

console.log(greeting);
```

