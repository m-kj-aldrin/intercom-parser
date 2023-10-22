function deepEqual(x, y) {
    return x && y && typeof x === "object" && typeof y === "object"
        ? Object.keys(x).length === Object.keys(y).length &&
              Object.keys(x).reduce(function (isEqual, key) {
                  return isEqual && deepEqual(x[key], y[key]);
              }, true)
        : x === y;
}

export default {
    objectEqual: (a, b, msg, details = false) => {
        let res = deepEqual(a, b);
        if (res) {
            if (details) {
                console.log(
                    `%cpassed: ${msg}%c\n${JSON.stringify(
                        a,
                        null,
                        2
                    )}\n${JSON.stringify(b, null, 2)}`,
                    "font-family:monospace;color:green;font-weight:bold",
                    "font-family:monospace;color:black"
                );
            } else {
                console.log(
                    `%cpassed: ${msg}`,
                    "font-family:monospace;color:green;font-weight:bold"
                );
            }
        } else {
            if (details) {
                console.log(
                    `%cfailed: ${msg}%c\n${JSON.stringify(
                        a,
                        null,
                        2
                    )}\n${JSON.stringify(b, null, 2)}`,
                    "font-family:monospace;color:red;font-weight:bold",
                    "font-family:monospace;color:black"
                );
            } else {
                console.log(
                    `%cfailed: ${msg}`,
                    "font-family:monospace;color:red;font-weight:bold"
                );
            }
        }
    },
    equal: (a, b) => {},
};
