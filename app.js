const http= require("http")
const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("hello from root")
    }
})


server.listen(3001,()=>{
    console.log("listining ")
})