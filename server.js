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
const fs = require('fs')
const nfl = http.createServer((req, res) => {
  let url = req.url
  res.writeHead(200, {'Content-Type': 'text/html'})
  if (url === '/') {
    let index = fs.readFileSync('index.html', 'utf-8')
    res.write(index)
    res.end()
  } else {
    let pathName = url.substr(1, url.length)
    fs.readFile(`${pathName}.html`, 'utf-8', (err, contents) => {
      if (err) {
        let notFound = fs.readFileSync(`404.html`, 'utf-8')
        res.write(notFound)
        res.end()
      } else {
        res.write(contents)
        res.end()
      }
    })
  }
  // switch (url) {
  //   case '/':
  //     let index = fs.readFileSync('index.html', 'utf-8')
  //     res.write(index)
  //     break
  //   case '/raiders':
  //     pathName = url.substr(1, url.length)
  //     let raiders = fs.readFileSync(`${pathName}.html`, 'utf-8')
  //     res.write(raiders)
  //     break
  //   case '/cowboys':
  //     pathName = url.substr(1, url.length)
  //     let cowboys = fs.readFileSync(`${pathName}.html`, 'utf-8')
  //     res.write(cowboys)
  //     break
  //   default:
  //
  // }
})
nfl.listen(3000)
// use 3rd party node modules
// based on url render different html files
// maybe get into params
