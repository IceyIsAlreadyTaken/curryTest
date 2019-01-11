const partial = (fn, ...partialArgs) => {
    let args = JSON.parse(JSON.stringify(partialArgs));
    return function (...fullArguments) {
        let arg = 0;
        for (let i = 0; i < partialArgs.length; i++) {
            if (partialArgs[i] === undefined) {
                args[i] = fullArguments[arg++];
            }
        }
        return fn.apply(null, args);
    };
};
export default partial;
//# sourceMappingURL=partial.js.map