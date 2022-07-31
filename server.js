const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 8000;


const requestListener = function (req, res) {
    var filePath = null;
    if (req && req.url) {
        console.log(req.url)

        var path = null;
        var mimeType = null;
        if (req.url == '/') {
            path = `${__dirname}/public/index.html`;
            mimeType = "text/html";
        } else if (req.url.endsWith('js')) {
            path = `${__dirname}/public/javascript${req.url}`;
            mimeType = "text/javascript";
        }

        fs.readFile(path)
            .then(contents => {
                res.setHeader("Content-Type", mimeType);
                res.writeHead(200);
                res.end(contents);
            })
            .catch(err => {
                res.writeHead(500);
                res.end(err);
                return;
            });
    }

};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});