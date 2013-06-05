var express = require('express') // 1
  ,  app = express.createServer(express.logger()) // 2
  ,  dirname = process.cwd() // 4
  ,  path = require('path') // 12
  ,  port = 8005 // 3
  ;

    //if (process.argv[2] && process.argv[2].match(/^[0-9]+$/)) // 5
      //port = parseInt(process.argv[2]); // 6

app.use( express.static(dirname));   // 7
app.use( express.static( path.join( __dirname  + "/public") ) ); // 10

app.listen(port, function() { // 9
  console.log("Serving on port " + port + " files in " + dirname); // 8
  console.log("The currently executing script resides in directory '" +__dirname + '"'); //11
});



// 1)  assign: module 'express' to $express
// 2) assign ... to $app
// 3) assign number 8005 to $port'
// 4) take process.cwd [current working dir] 
//     and assign ... to $dirname'
// 5) if it's true that ...
// 6)  then re-assign 'port', take ..., parse it into an int, and re-assign it to $port
// 7) 1. pass $dirname to m. static of o.express
//    2. pass the return value app.use    
// 8) nameless function: prints (in terminal) port number and dir_name. 
//     - port number will be 8005
//     - dir_name will be the absolute path to the dir where s.js is located.
// 9) take port_number and nameless function, 
//     and pass to app.listen()
// 10) This results in:
//     /Users/igoryen/igoryen_personal/Learn/avocado/public.
//     If you don't specify a specific dir. then express will use dir called 'public'. 
//     what will be served is only the HTML file in public
// 11) __dirname has the name of the dir where the currently executing script [s.js] resides in
// 12)  module required for handling and transforming file paths.

