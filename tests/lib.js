function assert(message, expr) {
    if (!expr) {
        throw new Error(message);
    }
}

module.exports = {
    assert: assert
};