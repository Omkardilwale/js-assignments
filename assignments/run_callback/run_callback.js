function RunCallback(a, b, cb) {
    let Result10 =a+b;
    return cb(Result10);
}

module.exports = RunCallback;