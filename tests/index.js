let ut = require('./lib.js');
let ind = require('../src/index.js');


ut.testCase('Test sum multiples',{
    'test-noparams-limit1000':  function() {
        ut.assert('Test without parameters and limit 1000 should return 233168',ind.sumMultiples(1000) === 233168)
    },
    'test-params5-7-limit100000':  function() {
        ut.assert('Test with parameters (5, 7) and limit 100000 should return 233168',ind.sumMultiples(100000, 5, 7) === 1571321430)
    },
    'test-params7-9-limit1000000':  function() {
        ut.assert('Test with parameters (7, 9) and limit 1000000 should return 233168',ind.sumMultiples(1000000, 7, 9) === 119047880952)
    },
    'test-noparams-limitnegative-ex':  function() {
        let thrown = false;

        try {
            ind.sumMultiples(-5);
        } catch (e) {
            thrown = true;
        }

        ut.assert('Test without parameters and limit -5 should throw exception', thrown);
    },
    'test-params1-negative-limit1000':  function() {
        let thrown = false;

        try {
            ind.sumMultiples(1000, 1, -5);
        } catch (e) {
            thrown = true;
        }

        ut.assert('Test with parameters (1, -5) and limit 1000 should throw exception', thrown);
    },
    'test-paramsnegative-1-limit1000':  function() {
        let thrown = false;

        try {
            ind.sumMultiples(1000, -5, 1);
        } catch (e) {
            thrown = true;
        }

        ut.assert('Test with parameters (-5, 1) and limit 1000 should throw exception', thrown);
    },
    'test-params1-float-limit1000':  function() {
        let thrown = false;

        try {
            ind.sumMultiples(1000, 1, 5.89);
        } catch (e) {
            thrown = true;
        }

        ut.assert('Test with parameters (1, 5.89) and limit 1000 should throw exception', thrown);
    },
    'test-paramsfloat-1-limit1000':  function() {
        let thrown = false;

        try {
            ind.sumMultiples(1000, 5.89, 1);
        } catch (e) {
            thrown = true;
        }

        ut.assert('Test with parameters (5.89, 1) and limit 1000 should throw exception', thrown);
    },
    'test-noparams-limit1000001':  function() {
        let thrown = false;

        try {
            ind.sumMultiples(1000001);
        } catch (e) {
            thrown = true;
        }

        ut.assert('Test without parameters and limit 1000001 should throw exception', thrown);
    },
    'test-m1-suplimit-ex':  function() {
        let thrown = false;

        try {
            ind.sumMultiples(1000,1001,3);
        } catch (e) {
            thrown = true;
        }

        ut.assert('Test with m1 > 1000 should throw exception', thrown);
    },
    'test-m2-suplimit-ex':  function() {
        let thrown = false;

        try {
            ind.sumMultiples(1000,3,1001);
        } catch (e) {
            thrown = true;
        }

        ut.assert('Test with m2 > 1000 should throw exception', thrown);
    },
    'test-m1-notanumber':  function() {
        let thrown = false;

        try {
            ind.sumMultiples(1000,'toto',10);
        } catch (e) {
            thrown = true;
        }

        ut.assert('Test with m1 not a number should throw exception', thrown);
    },
    'test-m2-notanumber':  function() {
        let thrown = false;

        try {
            ind.sumMultiples(1000,10,'toto');
        } catch (e) {
            thrown = true;
        }

        ut.assert('Test with m2 not a number should throw exception', thrown);
    },
    'test-limit-notanumber':  function() {
        let thrown = false;

        try {
            ind.sumMultiples('prp',3,5);
        } catch (e) {
            thrown = true;
        }

        ut.assert('Test with limit not a number throw exception', thrown);
    },
    'test-boucle': function () {
        let tab1 = [];
        let failed = true;

        for (let i = 1; i < 1000; i++) {
            tab1[i] = ind.sumMultiples(10000, 3*i, 5*i);
        }

        for (let i = 1; i < 1000; i++) {
            failed &= tab1[i] === ind.sumMultiples(10000, 3*i, 5*i);
        }

        ut.assert('Test result equals after iteration', failed);
    }
    
});

const nbExecutions = 10000;
let timeExecutionMs = ut.benchmark(ind.sumMultiples, nbExecutions, [10000,3,5]);
console.log(`\x1b[96mBenchmark for ${nbExecutions} executions of function sumMultiples with params (limit = 10000, m1 = 3, m2 = 5) :: ${timeExecutionMs} ms\x1b[0m` );




