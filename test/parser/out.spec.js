import out from "../../src/parser/out.js";
import assert from "../assert.js";

let outString0 = "out:8:0:1:2:3:4";

assert.objectEqual(
    out(outString0),
    {
        source: {
            cv: {
                module: 1,
                chain: 2,
            },
            gate: {
                module: 3,
                chain: 4,
            },
        },
        destination: {
            pid: 8,
            channel: 0,
        },
    },
    "out string"
);
