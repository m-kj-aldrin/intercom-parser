/**
 * @typedef {Object} ChainStruct
 * @property {Object} input
 * @property {import('./periphial.js').PeriphialStruct} input.cv
 * @property {import('./periphial.js').PeriphialStruct} input.gt
 * @property {import('./module.js').ModuleStruct[]} modules
 */

import module from "./module.js";
import periphial from "./periphial.js";

/**
 * @param {string} chainString
 * @returns {ChainStruct}
 */
export default function (chainString) {
    const [chainIn, modules] = chainString.split(">");

    const [cv, gt] = chainIn.split(",").map(periphial);

    return {
        input: {
            cv,
            gt,
        },
        modules: modules.split(",").map(module),
    };
}
