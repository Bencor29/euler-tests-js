let ut = require('./lib.js');
let ind = require('../src/index.js');


ut.testCase('Test sum multiples',{
   '0':  function() {
       ut.assert('Test without multiples parameters and limit 1000 should return 233168',ind.sumMultiples(1000) === 233168)
   }
});


