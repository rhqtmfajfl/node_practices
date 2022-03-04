const http = require("http");


const port = 9090;
const server = http.createServer(function(req, resp){
    // console.log("request received");
         resp.writeHead(200, {
        'Content-Type' : 'text/html'
    });

    resp.end('<h1>Hello World</h1>');


});


server.listen(9090, function(){
    console.log("http server running on " + port);
});


// server.listen(9090);

