// Listing 4.6 The contents of the handler.ts file in the src folder

import { IncomingMessage, ServerResponse } from "http" ;

export const handler = (req: IncomingMessage, res: ServerResponse) => {
    res.end("Hello World");
}