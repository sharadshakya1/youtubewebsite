var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer(function(request, response){
	var path = url.parse(request.url).pathname;
	switch(path)
	{
		case '/':
		response.writeHead(200{'Content-Type':'text/plain'});
		response.write("this is text message");
		response.end();
		break;
		case '/Frameset.html';
		fs.readFile(_dirname + path, function(error, data){

			if (error) {
				response.writeHead(404);
				response.write(error);
				response.end();
			}
			else
			{
				response.writeHead(200,{'Content-Type':'text/html'});
				response.write(data);
				response.end();
			}
		});
		break;
		default:
		response.writeHead(404);
		response.write("oops this does not exist");
		response.end();
		break;
	}
});
server.listen(8082);