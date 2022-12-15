const http = require("http"); //cargar un modulo node.js
const url = require("url");

const rd = require("./modules/retreivedate"); //cargamos un modulo propio

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("La fecha y hora es: " + rd.RetreiveDate());
    // res.write(req.url);
    const query = url.parse(req.url, true).query;
    const text = query.year + " " + query.month;
    res.end(text);
  })
  .listen(8080);
