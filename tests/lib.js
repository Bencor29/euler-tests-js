function assert(message, expr) {
    if (!expr) {
        output(false, message);
        throw new Error(message);
    }
    output(true, message);
}

function output(result, message) {
    message = `\x1b[90m${message}`;
    message += ': \x1b[40m' + (result ? '\x1b[32mSUCCESS' : '\x1b[31mFAILURE') + '\x1b[0m';
    console.log(`${message}`);
}

function testCase(message, tests){
    console.log(`\x1b[96m${message}\x1b[0m`);
    let total = 0;
    let succeed = 0;
    for(let test in tests){
        total++;
        try {
            if (tests.hasOwnProperty(test)) {
                tests[test]();
                succeed++;
            } else {
                throw new Error(`Unknown member '${test}'`);
            }
        }catch(err){
            // TODO Faire un truc sympa ici
        }
    }

    let testsResult = '\x1b[32mSucceed tests ' + succeed + '/' + total + '\x1b[0m';
    console.log(testsResult);
}

function benchmark(func, executions) {
    let start_ms = new Date().getMilliseconds();

    for (let i = 0; i < executions; i++) {
        func();
    }

    let stop_ms = new Date().getMilliseconds();
    return stop_ms - start_ms;
}

module.exports = {
    assert: assert,
    testCase: testCase,
    benchmark: benchmark
};
