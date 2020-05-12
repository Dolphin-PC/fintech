var fs = require('fs')

console.log('1st')

var result = fs.readFileSync('example_async/test.txt','utf8')

console.log(result)

console.log('3rd')