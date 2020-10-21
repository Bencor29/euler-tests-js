function sumMultiples(limit, m1=3, m2=5) {
    if (limit <= 0) {
        throw new Error("Limit must be superior to 0")
    }

    if (parseInt(limit) == NaN ){
        throw new Error("Limit must be an integer")
    }

    if(m1 >=  limit || m2 >= limit) {
        throw new Error("m1 or m2 must be inferior to limit number")
    }

    if (parseInt(m1) == NaN || parseInt(m2) == NaN){
        throw new Error("m1 or m2 must be number")
    }

    if (limit > 1000000){
        throw new Error("Limit value is too high choose a number under one million")
    }
    
    if (m1 <= 0 || m2 <= 0 || !Number.isInteger(m1) || !Number.isInteger(m2)) {
        throw new Error("Multiples parameters must be positive integers");
    }
    
    let sumMult = 0;
    
    for (let i=0; i < limit; i++){
        if ((i % m1 === 0) || (i % m2 === 0)) {
            sumMult += i;
        }
    }
    return sumMult;
}

module.exports = {
    sumMultiples: sumMultiples
};