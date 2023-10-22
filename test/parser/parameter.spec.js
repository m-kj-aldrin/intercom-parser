import parameter from "../../src/parser/parameter.js";
import assert from "../assert.js";

let paramString0 = "300";

assert.objectEqual(parameter(paramString0), { value: 300 }, "param string");
