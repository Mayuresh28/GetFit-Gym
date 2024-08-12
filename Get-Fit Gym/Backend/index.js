var http = require("http");

http.createServer(
    
function(req,res){
res.write("Hello World....Good night");
}



).listen(5000,()=>{
    console.log("Server is running...");
})