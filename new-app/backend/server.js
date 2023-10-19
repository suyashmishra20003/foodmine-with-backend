const express = require('express');
const server = express();

server.use(express.json());
server.use(express.urlencoded({extended : true}));

let todoList = [
    {task:'Study' , done : 'yes'},
    {task:'Eating' , done : 'no'},
    {task:'Waking' , done : 'no'},
    {task:'Reading' , done : 'yes'},
]
server.get('/todo', (req, res) => {
    res.send(todoList);
})

server.use();

server.use('/', express.static('dist/frontend'));

server.listen(1234);


//  The line server.use('/public',express.static(__dirname + '/public')); in Node.js tells the server to serve static files from the public directory.

//  The express.static() middleware function takes a path to a directory as its argument. The server will serve static files from this directory when a client requests a file that is located in the directory.

// The __dirname variable contains the absolute path to the directory where the current script is located. Therefore, the __dirname + '/public' expression resolves to the absolute path to the public directory.

// const todoRoute = require('./routes/todo')
// server.use('/', todoRoute);
