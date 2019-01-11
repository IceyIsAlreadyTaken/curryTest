"use strict";
exports.__esModule = true;
var curry = function (fn) {
    if (typeof fn !== 'function') {
        throw Error('No function provided');
    }
    return function curriedFn() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length < fn.length) {
            return function () {
                return curriedFn.apply(null, args.concat([].slice.call(arguments)));
            };
        }
        return fn.apply(null, args);
    };
};
exports["default"] = curry;
//# sourceMappingURL=curry.js.map