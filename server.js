var module = require('C:\\Users\\psm\\Desktop\\routes')

var posts = require('C:\\Users\\psm\\Desktop\\routes\\posts.js')
var comments = require('C:\\Users\\psm\\Desktop\\routes\\comments.js')

var express = require('express')
var app = express()

var bodyParser = require('body-parser');

app.listen(3000)

//post services
app.post('/posts', posts.addPost)
app.post('/posts/:id', posts.updatePost)
app.get('/posts',posts.getPosts)
app.delete('/posts/:id', posts.removePost)


/*app.use('/posts',function (req, res) {

  res.send('Hello World')
})*/

//module.map({
//    'POST /posts':'posts.addPost'//,
//    'GET /foo':'middleware.foo,test',
//    'GET /bar':'middleware.bar,test'
// seperate your handlers with a comma. 
//});