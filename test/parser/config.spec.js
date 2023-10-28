import config from "../../src/parser/config.js";
import assert from "../assert.js";

let chainsString0 = "cv_,gt_>PTH,BCH250:[0:1];cv0:5,gt8:12>LFO";
let outsString0 = "out:8:0:1:2:3:4;out:2:4:0:1:2:0";

let configString0 = `${chainsString0};${outsString0}`;

assert.objectEqual(
    config(configString0),
    {
        chains: [
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
                        name: "LFO",
                        parameters: [],
                    },
                ],
            },
        ],
        outs: [
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
            {
                source: {
                    cv: {
                        module: 0,
                        chain: 1,
                    },
                    gate: {
                        module: 2,
                        chain: 0,
                    },
                },
                destination: {
                    pid: 2,
                    channel: 4,
                },
            },
        ],
    },
    "config string"
);
