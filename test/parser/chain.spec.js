import chain from "../../src/parser/chain.js";
import assert from "../assert.js";

let chainString0 = "cv_,gt_>PTH,BCH250:[0:1]";

assert.objectEqual(
    chain(chainString0),
    {
        input: {
            cv: {
                pid: null,
                ch: null,
            },
            gt: {
                pid: null,
                ch: null,
            },
        },
        modules: [
            {
                name: "PTH",
                parameters: [],
            },
            {
                name: "BCH",
                parameters: [{ value: 250 }, { value: "0:1" }],
            },
        ],
    },
    "chain string"
);

let chainString1 = "cv0:5,gt8:12>PTH,BCH250:[0:1]";

assert.objectEqual(
    chain(chainString1),
    {
        input: {
            cv: {
                pid: 0,
                ch: 5,
            },
            gt: {
                pid: 8,
                ch: 12,
            },
        },
        modules: [
            {
                name: "PTH",
                parameters: [],
            },
            {
                name: "BCH",
                parameters: [{ value: 250 }, { value: "0:1" }],
            },
        ],
    },
    "chain string",
    true
);
