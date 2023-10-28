/**
 * @typedef {Object} Source
 * @property {{module:number,chain:number}} cv
 * @property {{module:number,chain:number}} gate
 */

/**
 * @typedef {Object} Destination
 * @property {number} pid
 * @property {number} channel
 */

/**
 * @typedef {Object} OutStruct
 * @property {Source} source
 * @property {Destination} destination
 */

/**
 * @param {string} outString
 * @returns {OutStruct}
 */
export default function (outString) {
    let stripped = outString.replace(/^\w{3}:/, "");
    let splitted = stripped.split(/:/).map((s) => +s);

    let [pid, channel, ...source] = splitted;

    return {
        source: {
            cv: {
                module: source[0],
                chain: source[1],
            },
            gate: {
                module: source[2],
                chain: source[3],
            },
        },
        destination: {
            pid,
            channel,
        },
    };
}
