const http = require('http');


let server = http.createServer(function(req, res){
  let returnItem = "";
  req.on('data', function (chunk) {returnItem += chunk;});
  req.on('end', function(){
    if (req.method == 'GET') {
      res.write('<html><body>HELLO!</body></html>');
    	res.end();
      }
    if (req.method == "POST"){
      let body = ""
  		req.on('data', (chunk) => {
  			body += chunk;
  		})
  		req.on('end', () => {
  			console.log("Adding message: " + body);
  			let message = JSON.parse(body);
  			if(addMessage(message)){
  				res.writeHead(200, { 'content-type': "text/plain" });
  				res.end();
  			}else{
  				send404(res);
  			}
  		})
    }

  })
}).listen(3000);
console.log('Server running at localhost');
