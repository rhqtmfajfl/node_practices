const http = require('http');

const path = require("path");  // path에서 사용하는 require("path")

const express = require("express");

const helloRouter = require('./routes/hello');
const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');

// const { nextTick } = require('process');

const port = 9090;

//Application SetUp
const application = express()
    //1. static resources
    .use(express.static(path.join(__dirname, "assets")))  //path.join() 에서 assets의 /를 안 붙옇도 된다.
    //2. request body parser
    .use(express.urlencoded({extended: true}))//application/x-www-form-urlencoded
    .use(express.json())    // application/json
    //3. view engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine','ejs')  //ejs는 템플릿 / 패키지 설치 필요

    //4. request router
    .all('*', function(req, res, next){   //next를 써야지 파라미터로 들어오는 next를 써줘야 뒤로 넘어간다.
        res.locals.req = req;   //locals에 대해서 이해 필요
        res.locals.res = res;
        next();
    })
    .use('/', mainRouter)  //router 객체 쓸때는 use
    .use("/user",userRouter)
    .use('/hello',helloRouter);
// Server SetUp
http
    .createServer(application)
    .on('listening', function(){
        console.log("http server runs on " + port)
    })
    .on('error', function(error){
        console.error(error);
    })
    .listen(port)
