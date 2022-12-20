import http from 'http';

const requestListner = function (req,res){
    console.log(req.method);
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'zpf')
    if(req.method==='OPTIONS'){
        res.writeHead(204);
        res.end();
        return;
    }else{
        res.writeHead(200);
        res.end("Hello World");
    }
}

const server = http.createServer(requestListner);
server.listen(8080,() => console.log('server is listening on http://localhost:8080 '))