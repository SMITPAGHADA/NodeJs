const http= require("http");
const port =8001;
 


const portHandler=(req,res)=>{
 res.write(" <h1></h1>")
}

const server= http.createServer();


server.listen(port,(err)=>{
    err ? console.log(err) : console.log(" server started on port" + port)
})