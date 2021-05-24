var express = require('express'); 
var app = express();  
var testVar =   process.env.MY_VAR || "No var present"
var port = process.env.PORT||8080
 
app.get('/index.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
    
})  
app.get('/process_get', function (req, res) {  
response = {  
       first_name:req.query.first_name,  
       last_name:req.query.last_name  
   };  
   console.log(response); 
	console.log("Sent data are (GET): first name :"+req.query.first_name+" and last name :"+req.query.last_name);   
   //res.end(JSON.stringify(response));  
   res.end("Sent data are (GET): first name :"+req.query.first_name+" and last name :"+req.query.last_name);
})  
var server = app.listen(port, function () {  
  
   
  console.log("Example app listening at %s",  port)  
  
})  