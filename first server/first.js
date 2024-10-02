const http = require('http');

const port = 8002;


const portHandelr=(req,res)=>{
    res.write("<h1> hello world <h1/>");
    res.end();

}
const server = http.createServer(portHandelr);
server.listen(port,(err)=>{
   err?console.log(err): console.log("server started on port" + port);
});