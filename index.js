const fs = require("fs");
const http = require('http');
const mime = require('mime');
const nunjucks = require('nunjucks');
const url = require("url");
const qs = require("querystring");
const data = JSON.parse(fs.readFileSync("./data.json"));
http.createServer(function (req, res) {
    if(req.method === "GET"){
        if(req.url === "/"){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(nunjucks.render("index.njk", {unlock:data}));
            res.end();
        }else if(req.url === "/edit"){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(nunjucks.render("write.njk"));
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
    }else if(req.method === "POST"){
        let p = url.parse(req.url);
        if(p.path === "/api/update"){
            let data = "";
            req.on("data", (dat) => {
                data += dat;
            });
            req.on("end", () => {
                data = qs.parse(data);
                let year = data.year;
                let day = data.day;
                let part = data.part;
                console.log(year);
                fs.writeFile(`./${year}/${day}/${part}.js`, `document.querySelector("#run").onclick = function(){
                    ${data.txt}
                }`, (err) => {
                    if(err){
                        console.log(err);
                    }else{
                        console.log("File changed");
                    }
                });
            })
        }
    }
}).listen(8080);