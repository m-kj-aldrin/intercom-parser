/**
 * @typedef {Object} ConfigStruct
 * @property {import('./chain.js').ChainStruct[]} chains
 * @property {import("./out.js").OutStruct[]} outs
 */

import chain from "./chain.js";
import out from "./out.js";

/**
 * @param {string} configString
 * @returns {ConfigStruct}
 */
export default function (configString) {
    let splitted = configString.split(/;/);

    let [chains, outs] = splitted.reduce(
        (prev, curr) => {
            if (curr.includes("out")) {
                prev[1].push(out(curr));
            } else {
                prev[0].push(chain(curr));
            }

            return prev;
        },
        [[], []]
    );

    return {
        chains,
        outs,
    };
}
