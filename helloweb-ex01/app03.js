
const connect = require("connect");
const serveStatic = require('serve-static');

const port = 9090;
const app = connect(); // connect는 함수로 사용된다.

app.use(serveStatic)
const server = http.createServer(function(req, resp){
    console.log(req.url);

    if(req.url === '/'){
        req.url = '/index.html';

    }

    fs.use(__dirname + '/public' + req.url ,function(error, data){
            resp.writeHead(200, {
            'Content-Type' : 'text/html'
        });

        resp.end(data);


    });
    

});


server.listen(9090, function(){
    console.log("http server running on " + port);
});


// server.listen(9090);
