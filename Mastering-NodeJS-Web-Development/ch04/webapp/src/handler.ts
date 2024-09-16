// Listing 4.13 Chaining promise methods in the handler.ts file in the src folder

import { IncomingMessage, ServerResponse } from "http";
// import { readFile } from "fs" ;
import { readFile } from "fs/promises";

export const handler = (req: IncomingMessage, res: ServerResponse) => {
    readFile("data.json")
        .then((data: Buffer) => res.end(data, () => console.log("File sent")))
        .catch((err: Error) => {
            console.log(`Error: ${err.message}`);
            res.statusCode = 500;
            res.end();
        });
}