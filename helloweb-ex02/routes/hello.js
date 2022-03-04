const express = require('express');

const router = express.Router();

router.route('/01').get(function(req, res){

  
  res.render('hello/01');
})


router.route('/02').get(function(req, res){
    const data ={
      no: req.query.no || '',
      email: req.query.email || ''
    };

    res.render('hello/02', data);  //여기서 data 부분에 위의 data를 {}를 만들어서 넣어도 된다.
    //하나의 객체가 있따.
  });

//route 안에 있던것 삭제
// console.log("!!!!");
// res.writeHead(200, {
//     'Content-Type': 'text/html'
// });
// res.end("<h1>/hello/01</h1>");


module.exports = router;