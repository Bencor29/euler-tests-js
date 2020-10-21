function sumMultiples(limit, m1=3, m2=5) {
    if (limit <= 0) {
        throw new Error("Limit must be superior to 0")
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