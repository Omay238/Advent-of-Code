const http = require('http');
const mime = require('mime');
const fs = require("fs");
const nunjucks = require('nunjucks');
const data = JSON.parse(fs.readFileSync("./data.json"));
http.createServer(function (req, res) {
    if(req.url === "/"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(nunjucks.render("index.njk", {unlock:data}));
        res.end();
    }else if(mime.getType(req.url) !== null){
        res.writeHead(200, {'Content-Type': mime.getType(req.url)});
        res.write(fs.readFileSync("."+req.url));
        res.end();
    }else if(req.url.split("/").length === 2){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(nunjucks.render("year.njk", {path:req.url,unlock:data}));
        res.end();
    }else if(req.url.split("/").length === 3){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(nunjucks.render("day.njk", {path:req.url,unlock:data}));
        res.end();
    }else if(req.url.split("/").length === 4){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(nunjucks.render("part.njk", {path:req.url}));
        res.end();
    }
}).listen(8080);