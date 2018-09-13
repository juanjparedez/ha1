/* App luncher => primary file */

// Dependencies 
let http = require('http')
let str = 'Hello World!\n'


// server object
let server = http.createServer(function(req,res) {
    res.end(str)
})

// Starting the server
server.listen(3000, function(){
    console.log('server listen on port 3000')
    
})

