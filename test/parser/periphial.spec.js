import periphial from "../../src/parser/periphial.js";
import assert from "../assert.js";

let periphialString0 = "cv0:5";

assert.objectEqual(
    periphial(periphialString0),
    {
        pid: 0,
        ch: 5,
    },
    "periphial string full"
);

let periphialString1 = "cv_:5";

assert.objectEqual(
    periphial(periphialString1),
    {
        pid: null,
        ch: 5,
    },
    "periphial string half first"
);

let periphialString2 = "cv0:_";

assert.objectEqual(
    periphial(periphialString2),
    {
        pid: 0,
        ch: null,
    },
    "periphial string half seccond"
);

let periphialString3 = "cv_";

assert.objectEqual(
    periphial(periphialString3),
    {
        pid: null,
        ch: null,
    },
    "periphial string null"
);
