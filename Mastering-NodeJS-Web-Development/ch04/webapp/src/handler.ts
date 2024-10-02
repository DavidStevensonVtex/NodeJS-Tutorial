// Listing 4.20 A Blocking Operation in the handler.ts file in the src folder

import { IncomingMessage, ServerResponse } from "http";
import { readFile } from "fs/promises";
import { endPromise, writePromise } from "./promises" ;

const total = 100_000_000 ;
const iterations = 5 ;
let shared_counter = 0;

export const handler = async (req: IncomingMessage, res: ServerResponse) => {
    const request = shared_counter++;
    for (let iter = 0 ; iter < iterations ; iter++) {
        for (let count = 0 ; count < total ; count++) {
            count++;
        }

        const msg = `Request: ${request}, Iteration: ${(iter)}`;
        console.log(msg);
        await writePromise.bind(res)(msg + "\n");
    }
    await endPromise.bind(res)("Done");
}