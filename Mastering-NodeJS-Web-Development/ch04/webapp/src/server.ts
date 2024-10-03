// Listing 4.19 Filtering Requests in the server.ts file in the src folder

import { createServer } from "http" ;
import { handler } from "./handler" ;

const port = 5000 ;

const server = createServer() ;

server.on("request", (req, res) => {
    console.log("server.ts", "request made", req.url);
    if (req.url?.endsWith("favicon.ico")) {
        res.statusCode = 404 ;
        res.end();
    } else {
        handler(req, res);
    }
});

server.listen(port);

server.on("listening", () => {
    console.log(`(Event) Server listening on port ${port}`);
});