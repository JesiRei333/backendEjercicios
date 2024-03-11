const http = require('node:http');

const hostname = '127.0.0.1';//localhost
const port = 3000;


//texto plano

/*
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain'); //texto plano

    switch(req.method){
        case "GET": 

            res.statusCode=200;
            if (req.url == '/hi'){
            res.end('hello koders \n')
            } else {
                res.end('ok \n')
            }
            
            break;
        case "POST":
            res.statusCode=201;
            break;
        default:
            res.statusCode=200;
            break;
    }


 
  //res.end('holi koders!\n');
});

*/

//html

/*
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'html'); //html

    switch(req.method){
        case "GET": 

            res.statusCode=200;
            if (req.url == '/hi'){
            res.end('<h1>hello koders \n</h1>')
            } else {
                res.end('<h1>hello koders \n</h1>')
            }
            
            break;
        case "POST":
            res.statusCode=201;
            break;
        default:
            res.statusCode=200;
            break;
    }

});
*/

//usaremos json
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json'); //json

    switch(req.method){
        case "GET": 

            res.statusCode=200;
            if (req.url == '/hi'){
            res.end('{"message": "hello koders"}')
            } else {
                res.end('{"message": "ok"}')
            }
            
            break;
        case "POST":
            res.statusCode=201;
            break;
        default:
            res.statusCode=200;
            break;
    }

});




server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});