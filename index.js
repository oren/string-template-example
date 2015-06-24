var fs = require('fs');
var format = require("string-template")
var greeting;
var template = fs.readFileSync('template.txt', 'utf8');

greeting = format(template, {
      name: "Robert",
      count: 12
})

console.log(greeting);
