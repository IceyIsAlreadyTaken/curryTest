"use strict";
exports.__esModule = true;
var partial = function (fn) {
    var partialArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        partialArgs[_i - 1] = arguments[_i];
    }
    var args = JSON.parse(JSON.stringify(partialArgs));
    return function () {
        var fullArguments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fullArguments[_i] = arguments[_i];
        }
        var arg = 0;
        for (var i = 0; i < partialArgs.length; i++) {
            if (partialArgs[i] === undefined) {
                args[i] = fullArguments[arg++];
            }
        }
        return fn.apply(null, args);
    };
};
exports["default"] = partial;
//# sourceMappingURL=partial.js.map