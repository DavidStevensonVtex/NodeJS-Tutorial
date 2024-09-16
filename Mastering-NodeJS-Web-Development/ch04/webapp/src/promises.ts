// Listing 4.16 The Contents of the promises.ts file in the src folder

import { ServerResponse } from "http" ;
import { promisify } from "util" ;

export const endPromise = promisify(ServerResponse.prototype.end) as 
    (data: any) => Promise<void>;