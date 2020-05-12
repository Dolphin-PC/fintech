var fs = require('fs')



function callbackFunc(callback){
    fs.readFile('example_async/test.txt', 'utf8',function(err, result){
        if(err) {
            console.log(err)
            throw err;
        }
        else{
            console.error("reading...")
            callback(result)
        }
    })
}

console.log('1st function')
callbackFunc(function (data){
    console.log(data);
    console.log('3rd');
})