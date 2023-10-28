import module from "../../src/parser/module.js";
import assert from "../assert.js";

let moduleString0 = "BCH250:[0:1]";

assert.objectEqual(
    module(moduleString0),
    {
        name: "BCH",
        parameters: [{ value: 250 }, { value: "0:1" }],
    },
    "module string"
);

let moduleString1 = "LFO";

assert.objectEqual(
    module(moduleString1),
    {
        name: "LFO",
        parameters: [],
    },
    "module string"
);

let moduleString2 = "PRO33";

assert.objectEqual(
    module(moduleString2),
    {
        name: "PRO",
        parameters: [{ value: 33 }],
    },
    "module string",
    true
);
