const http = require('http');

http.createServer((request, response) => {
   response.write("hello world");
   response.end();
}).listen(3000);
console.log("Server Running...");
