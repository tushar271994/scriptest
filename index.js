"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
restService.use(bodyParser.json());

restService.post("/NSEscrip", function(req, res, next) {
  var scrips = require("./NSE_scrips.json"); 
  var username = req.body.result.parameters.name
  for(var i=0 ; i < scrips.length ; i++ ) {
    if(scrips[i].FIELD5 !== -1)
    if(scrips[i].FIELD5 === username){
      var check= "valid scrip";
      var flag=true;

    }
    else{
      var check=" In valid";
    }
    if(flag===true){
      break;
    }
  }
    
      return res.json({
      speech:check
      });
 });
restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});




