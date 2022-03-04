
const connect = require("connect");
const serveStatic = require('serve-static');

const port = 9090;
const app = connect(); // connect는 함수로 사용된다.


app.use(connectRoute(function(router){
    router.get("/",function(req,resp){
        resp.writeHead(200, {
            'Content-Type' : 'text/html'
        });

        resp.end("<h1>Main</h1>");
    });

    router.get("/user",function(req,resp){
        resp.writeHead(200, {
            'Content-Type' : 'text/html'
        });

        resp.end("<h1>User</h1>");
    });


}));
app.use(serveStatic(__dirname + "/public"));

server.listen(9090, function(){
    console.log("http server running on " + port);
});


// server.listen(9090);
