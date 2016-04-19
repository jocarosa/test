var express = require('express');
var app = express();
var moment= require('moment');



app.get('/:query', function(req, res) {
     var d = req.params.query;  //date from url
    // var valid=null;
   
     var unixFormat=null;
     var naturalDate=null;
     var result;
     
        if ((moment.unix(d).isValid())){
        
        unixFormat=d;
        naturalDate = moment.unix(d).format("MMMM DD YYYY");//from unix to natural date
        }
        
          if(moment(d).isValid())
           {
       unixFormat=new Date(d)*10/10000;//unix date
       naturalDate=d;
           }
    
  
         result=JSON.stringify({unix:unixFormat,natural:naturalDate});
         res.send(result);
  
  
});

    
app.use(express.static('public'));
app.use(require('stylus').middleware('public'));





     



var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
    
});