let ut = require('./lib.js');
let ind = require('../src/index.js');


ut.testCase('Test sum multiples',{
    'test-noparams-limit1000':  function() {
        ut.assert('Test without multiples parameters and limit 1000 should return 233168',ind.sumMultiples(1000) === 233168)
    },
    'test-params5-7-limit100000':  function() {
        ut.assert('Test with parameters (5, 7) and limit 100000 should return 233168',ind.sumMultiples(100000, 5, 7) === 1571321430)
    },
    'test-params7-9-limit1000000':  function() {
        ut.assert('Test with parameters (7, 9) and limit 1000000 should return 233168',ind.sumMultiples(1000000, 7, 9) === 119047880952)
    },
    'test-no-limit1000000negative-ex':  function() {
        let thrown = false;

        try {
            ind.sumMultiples(-5);
        } catch (e) {
            thrown = true;
        }

        ut.assert('Test without multiples parameters and limit -5 should throw exception', thrown);
    }
});


