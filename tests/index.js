let ut = require('./lib.js');
let ind = require('../src/index.js')


ut.testCase('Test sum multiples',{
   'test without multiples parameters and limit 1000':  function(){
       ut.assert('Should return 233168',ind.sumMultiples(1000) === 233168)
   }
});