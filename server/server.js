const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function(request, response) {

	console.log(request.url);
	const urlPath = url.parse(request.url).pathname;
	console.log(urlPath);
	//定数にしているバグがあった
	let filePath = `./client/${urlPath}`; //変数名を入れるときの括弧に注意
	console.log(filePath);

	fs.stat(filePath, function(err, fileInfo) {
		if(!err && fileInfo.isDirectory()) {
			filePath += '/index.html';
		}

		fs.exists(filePath, function(doesExist) {
			if (!doesExist) {
				response.statusCode = 404;
				response.end(`Resource not found "${urlPath}"`);
				//return;
			} else {
				fs.readFile(filePath, (err, data) => {
					if (err) {
						response.statusCode = 500;
						response.end(`Server error: "${err}"`);
					} else {
						response.end(data.toString('utf-8'));
					}
				});	
			}
		});

	});
});

server.listen(3000, function() {
	console.log('Server listening ...');
});