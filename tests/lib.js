function assert(message, expr) {
  if (!expr) {
    output(false, message);
    throw new Error(message);
  }
  output(true, message);
}

function output(result, message) {
  message += result ? " : SUCCESS" : " : FAILURE";
  console.log(message);
}

function testCase(message, tests){
    console.log(message);
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

    let testsResult = 'succeed tests ' + succeed + '/' + total ;
    console.log(testsResult);
}

function benchmark(func, executions) {
    let start_ms = new Date().getMilliseconds();

    for (let i = 0; i < executions; i++) {
        func(i);
    }

    let stop_ms = new Date().getMilliseconds();
    return stop_ms - start_ms;
}

module.exports = {
    assert: assert,
    testCase: testCase,
    benchmark: benchmark
};
