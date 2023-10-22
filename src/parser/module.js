import parameter from "./parameter.js";

/**
 * @typedef {Object} ModuleStruct
 * @property {string} name
 * @property {import("./parameter.js").ParameterStruct[]} parameters
 */

/**
 * @param {string} moduleString
 * @returns {ModuleStruct}
 */
export default function (moduleString) {
    const [name, values] = moduleString.split(/^(\w{3})/).slice(1);

    let valueSplits = values.match(/[^\[:](\d+)[^\]:]|\[\d+:\d+\]/g);

    const parameters = valueSplits?.map(parameter) ?? [];

    return {
        name,
        parameters,
    };
}
