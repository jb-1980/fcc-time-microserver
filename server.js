// server.js

// setup ======================================================================
// get all the tools we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var moment = require('moment');

// ===================================
// DATE INPUT ========================
// ===================================
app.get('/:date',function(req,res){
  if(moment(req.params.date, ['MMMM D, YYYY','MMMM DD, YYYY'],'en', true)
     .isValid()){

    res.json({
     'unix': moment(req.params.date).unix(),
     'natural': req.params.date,
     'type':'natural'
    });
  } else if(!isNaN(req.params.date)){
    res.json({
      'unix': Number(req.params.date),
      'natural': moment.unix(Number(req.params.date)).format(''),
      'type': 'unix'
    });
  } else {
    res.json({
      'unix': null,
      'natural': null
    })
  }

});

// ===================================
// TIMESTAMP INPUT ========================
// ===================================
app.get('/:timestamp',function(req,res){
   res.json({
     'natural': new Date(req.params.timestamp),
     'unix': req.params.timestamp
   });
}); // load our routes
// launch ======================================================================
app.listen(port);
console.log('The magic is happening on port '+port);
