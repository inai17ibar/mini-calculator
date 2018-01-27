const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function(request, response) {

	const urlPath = url.parse(request.url).pathname;
	const filePath = `./client/${urlPath}`; //`.${urlPath}`; //セキュリティ違反

	fs.stat(filePath, function(err, fileInfo) {
		if(!err && fileInfo.isDirectory()) {
			filePath += '/index.html';
		}

		fs.exists(filePath, function(doesExist) {
			if (!doesExist) {
				response.statusCode = 404;
				response.end(`Resource not found "${urlPath}"`);
				return;
			}

			fs.readFile(filePath, (err, data) => {
				if (err) {
					response.statusCode = 500;
					  response.end('Server error: "${err}"');
				} else {
					response.end(data.toString('UTF-8'));
				}
			});
		});
	});
});

server.listen(3000, function() {
	console.log('Server listening ...');
});