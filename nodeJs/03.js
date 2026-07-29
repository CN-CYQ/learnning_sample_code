const http = require('http')
const server = http.createServer() 

server.on('request', (req, res) => {    
    console.log(req.url)    
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('hello worlwdqwdwq2qwdd')
})
server.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})
