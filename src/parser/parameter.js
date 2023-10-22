/**
 * @typedef {Object} ParameterStruct
 * @property {number | string} value
 */

const refTestRE = new RegExp(/\[\d+:\d+\]/);

/**
 * @param {string} parameterString
 * @returns {ParameterStruct}
 */
export default function (parameterString) {
    let value = refTestRE.test(parameterString)
        ? parameterString.replace(/\[|\]/g, "")
        : +parameterString;

    return {
        value,
    };
}
