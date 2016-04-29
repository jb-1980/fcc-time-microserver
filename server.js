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
  if(!isNaN(req.params.date)){// date is assumed timestamp
    var date = moment.unix(Number(req.params.date));
    res.json({
      'unix': date.unix(),
      'natural': date.format('MMMM D, YYYY')
    });
  } else {
    var date = moment(req.params.date);
    if(date.isValid()){
      res.json({
        'unix': date.unix(),
        'natural': date.format('MMMM D, YYYY')
      })
    }

    // default response
    res.json({
      'unix': null,
      'natural': null
    })
  }
});

// ===================================
// Render index ======================
// ===================================
app.get('/',function(req,res) {
  res.sendFile(__dirname + '/index.html');
});
// launch ======================================================================
app.listen(port);
console.log('==> 🌎  Listening on port '+port);
