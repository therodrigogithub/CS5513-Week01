// this is a single-line javascript comment

/* define a variable and place
   into it the http package (shared code) from node.js */

let myhttp = require('http');

// use dot notation in javascript to access an object and its methods (commands) and properties
// createServer() takes some arguments to make it provide a useful http server
// 1: function (block of code) that will be run whenever the server receives an http request

let myserver = myhttp.createServer(
  function( myrequest, myresponse ) {
    console.log( myrequest.url );

    let mytext;
    if ( myrequest.url.length < 10 ) {
      mytext = "This is a relatively short url. Add a slash and 10 plus characters to create a longer url.";
    } else {
      mytext = "This is a relatively long url. Eliminate some characters after the slash to create a shorter url.";
    }
    // writeHead() creates an http response header, including the status code (200 OK), the content type
    myresponse.writeHead( 200, { "Content-Type": "text/plain" } );

    myresponse.end( mytext );
  }
);

// ask http to start listening on a tcp port for incoming http requests

// listen() takes 2 args: 1: tcp port #, 2: string of the ip address to listen (0.0.0.0)
myserver.listen(80, "0.0.0.0");

console.log("server has started")