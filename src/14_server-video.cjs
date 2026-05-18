const http = require("http");
const fs = require("fs");
const path = require("path");
const { log } = require("console");

const server = http.createServer(
    (req, res)=>{
        if(req.url === "/video"){
            const videoPath = path.resolve(__dirname,"../assets/video_test.mp4");
            const stat = fs.statSync(videoPath);

            res.writeHead(
                200,
                {
                    "Content-Type": "video/mp4",
                    "content-length": stat.size
                }
            );

            const readStream = fs.createReadStream(videoPath);
            let chunkCounter = 0;

            readStream.on(
                "data",
                (chunk)=>{
                    chunkCounter++;
                    console.log(`Chunk ${chunkCounter}:\n Size: ${chunk.length} bytes, leídos y enviados\n`);
                }
            );

            readStream.pipe(res);
        } else{
            res.writeHead(
                404,
                {"Content-Type": "text/plain"}
            );
            res.end("Not Found");
        }
    }
);

// http://localhost:3005/video
server.listen(
    3005,
    ()=>{
        console.log("Server is Running on http://localhost:3000");
        
    }
);
