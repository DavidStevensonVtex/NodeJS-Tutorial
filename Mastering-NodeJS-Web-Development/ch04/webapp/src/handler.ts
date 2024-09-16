// Listing 4.17 Using a Promise in the handler.ts file in the src folder

import { IncomingMessage, ServerResponse } from "http";
import { readFile } from "fs/promises";
import { endPromise } from "./promises" ;

export const handler = async (req: IncomingMessage, res: ServerResponse) => {
    try {
        const data: Buffer = await readFile("data.json");
        await endPromise.bind(res)(data);
        console.log("File sent");
    }
    catch (err: any) {
        console.log(`Error: ${err.message}`);
        res.statusCode = 500;
        res.end();
    }
}