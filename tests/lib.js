function assert(message, expr) {
    if (!expr) {
        output(false, message);
        throw new Error(message);       
    }
    output(true, message);
}

function output(result, message){
    message += result ? ' : SUCCESS' : ' : FAILURE';
    console.log(message);
}

function testCase(message, tests){
    let total = 0;
    let succeed = 0;
    for(test in tests){
     total++;
     try{
      tests[test]();
      succeed++;
     }catch(err){  
     }
    }
    
    let testsResult = 'succeed tests ' + succeed + '/' + total ;
    console.log(`${message}\n${testsResult}`);
}

module.exports = {
    assert: assert,
    testCase: testCase
};