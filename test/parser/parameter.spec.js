import parameter from "../../src/parser/parameter.js";
import assert from "../assert.js";

let paramString0 = "300";

assert.objectEqual(parameter(paramString0), { value: 300 }, "param string");

let paramString1 = "50";

assert.objectEqual(
    parameter(paramString1),
    { value: 50 },
    "param string",
    true
);
