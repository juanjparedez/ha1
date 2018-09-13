/* App luncher => primary file */

// Dependencies 
let http = require('http')
let url = require('url')

// config
let str = 'Hello World!\n'


// server object
let server = http.createServer(function(req,res) {

// Getting the url
let parsedUrl = url.parse(req.url, true)

// Getting the path
let path = parsedUrl.pathname
let trimmedPath = path.replace(/^\/+|\/+$/g, '')

// Get the http method
let methot = req.method.toLowerCase()

// Send the response
res.end(str)

// Log the requested path
console.log('Request received on path \"'+trimmedPath+'\" with method \"'+methot+'\"')

})

// Starting the server
server.listen(3000, function(){
    console.log('server listen on port 3000')
    
})

