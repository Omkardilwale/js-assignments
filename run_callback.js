function RunCallback(a, b, cb) {
    let Result1 =a+b;
    return cb(Result1);
}

module.exports = RunCallback;