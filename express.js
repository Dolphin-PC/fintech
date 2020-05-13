const express = require('express')
const app = express()
const path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,'public')));


app.get('/',function(req, res){
    var title = "javascript"
    res.send('<html><h1>'+title+'</h1></html>')
})

app.get('/test',function(req, res){
    res.send('TEST')
})

app.get('/design',function(req,res){
    res.render('designTest');
})

app.listen(3000)