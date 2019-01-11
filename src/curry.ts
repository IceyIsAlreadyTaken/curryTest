const curry = (fn: Function): Function => {
    if (typeof fn !== 'function') {
        throw Error('No function provided');
    }
    return function curriedFn(...args: any[]): Function {
        if (args.length < fn.length) {
            return function () {
                return curriedFn.apply(null, args.concat(
                    [].slice.call(arguments)
                ))
            }
        }
        return fn.apply(null, args);
    }
}

export default curry;