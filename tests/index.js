// import('./lib.js')
let ut = require('./lib.js');

function testFuncA(i) {
    ut.assert('Ceci est le message d\'erreur', Math.abs(-i) === i);
}

function benchmark(func, executions) {
    let start_ms = new Date().getMilliseconds();

    for (let i = 0; i < executions; i++) {
        func(i);
    }

    let stop_ms = new Date().getMilliseconds();
    return stop_ms - start_ms;
}

let testFuncA_bench = benchmark(testFuncA, 10000000);

console.log(`Temps pour 10.000 executions: ${testFuncA_bench} ms`);