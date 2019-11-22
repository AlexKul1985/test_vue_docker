const http = require("http");
const fs = require("fs");
 

http.createServer(function(request, response){
     fs.readFile('index.html',{encoding:'utf-8'},(err,data) => {
         if(err) throw err;
         response.setHeader('Content-Type','text-html')
         response.end(data);
     })
     
     
    
}).listen(8080,() => {
    console.log('listen 0.0.0.0:8080');
    
});