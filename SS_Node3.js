console.log('Morning, Server starting...');
const url = require('url');

http.createServer(function(request, response){
    console.log('Welcome to your first server');
    console.log('This is your dashboard');

    response.writeHead(200,"Running...");

    const query = url.parse(request.url, true).query;
    response.end('Hi' + query.name);

/*
    if(query.name) {
      response.end('hello' + query.name);
    } else {
      response.end('Hi Stranger');
    }
*/
    response.end('Thank you, and Good Bye. Please come again');
  }).listen(8081); 
  /*1. Before "listen(X)" it's just the configuration of the server...
    2.Means it's not running/initiate, it'S stop.
    3. So you need to say in "GetPostman" what server to listen to.
    4. Use instead the Thunder Client Ext. as your server workplace. 
    -----
    5. Add "?name=JaneDoe" in the request URL; use & to add a key and value (i.e. "&age=18").
    6.  You need a request to call that last part of the URL, look how to call with the "SecondRequest" pictures.
    7. Once you set the request, if you dont add the "?..." in the URL you'll have an empty object.
    -----
    8. When the code/function runs in waits to be excetuded via the first request.
    9. Dont forget that you can play with the x of "=" (=,==,===) to see difference, or not, in the request.
    */

