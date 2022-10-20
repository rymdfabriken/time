"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ticker = void 0;
const ticker_1 = require("./ticker");
const ticker = (start = 0, stop = 0, iterations = 1, interval = 1000, movement = (n) => n + 1, mod = (n) => n / 2) => {
    return new ticker_1.default({
        start: start,
        stop: stop,
        interval: interval,
        iterations: iterations,
        movement: movement,
        mod: mod
    });
};
exports.ticker = ticker;
//# sourceMappingURL=index.js.map