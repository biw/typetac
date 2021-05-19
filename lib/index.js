"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createTac = (startingString) => {
    return new Proxy(String, {
        get: (_, prop) => {
            if (prop === Symbol.toPrimitive)
                return () => startingString.trim(); // called by react and console.log
            if (prop === Symbol.toStringTag)
                return () => startingString.trim();
            if (prop === 'toJSON')
                return () => startingString.trim();
            if (prop === 'call')
                return () => { };
            if (prop === 'name')
                return startingString.trim();
            if (startingString[prop])
                return startingString[prop];
            return createTac(`${startingString} ${prop.toString()}`);
        },
    });
};
const tac = createTac('');
exports.default = tac;
//# sourceMappingURL=index.js.map