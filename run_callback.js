function RunCallback(a, b, cb) {
    // Write you code here, you need to add a and b, pass the result into callback function cb as argument return the result
    let Result1 =a+b;
    return cb(Result1);
}

module.exports = RunCallback;
