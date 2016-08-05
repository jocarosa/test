var url     = require('url');
var moment  = require('moment');
module.exports=function(app){
    
    app.get('/:query',function(req,res){
      
        var unixtime   = '';    
        var normalDate = '';
        var pathname   = url.parse(req.url).path.replace('/','')
        var m          = decodeURI(pathname);
        
        if (moment(m).isValid()) {
            unixtime   = Date.parse(m)/1000; //converting to unixtime
            normalDate = m;
        }else{
            
            normalDate = new Date(m * 1000), unixtime = m;
            
            if(!moment(normalDate).isValid()){
                unixtime   ='null'
                normalDate ='null'
            }
            
        }
         
        
      
      
        res.send({"unix":unixtime,"natural":normalDate})
        
        
    });
};