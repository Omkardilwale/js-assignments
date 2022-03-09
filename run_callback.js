function RunCallback(a, b, cb) {
    let Result =a+b;
    return cb(Result);
}

module.exports = RunCallback;