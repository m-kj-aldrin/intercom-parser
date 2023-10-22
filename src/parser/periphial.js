/**
 * @typedef {Object} PeriphialStruct
 * @property {number} pid
 * @property {number} ch
 */

/**
 * @param {string} periphialString
 * @returns {PeriphialStruct}
 */
export default function (periphialString) {
    const [pid, ch] = periphialString
        .match(/\d+|_/g)
        ?.map((s) => (isNaN(+s) ? null : +s));

    return {
        pid: pid ?? null,
        ch: ch ?? null,
    };
}
