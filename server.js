// build out a server that renders plain text
const http = require('http')
const server = http.createServer((req, res) => {
  console.log('someone connected')
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.write('You have reached server 1337')
  res.end()
})
server.listen(1337)
// build out a server that renders json
const server2 = http.createServer((req, res) => {
  console.log('someone connected to server 2')
  res.writeHead(200, {'Content-Type': 'application/json'})
  let myObj = {message: 'how you like server bro?', status: 200, mimeType: 'json'}
  res.write(JSON.stringify(myObj))
  res.end()
})
server2.listen(1738)
// build out a server that renders html
const codeIm = require('./codeimmersive')
const server3 = http.createServer((req, res) => {
  console.log('connected to server 3 something else')
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write(codeIm)
  res.end()
})
server3.listen(2222)
// check the request object for the url
// use 3rd party node modules
// based on url render different html files
// maybe get into params
