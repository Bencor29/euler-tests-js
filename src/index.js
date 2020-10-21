function sumMultiples(limit,m1=3,m2=5){
    if (limit <= 0 ) throw new Error("Limit must be superior to 0")
    
    let sumMult = 0;
    
    for (let i=0; i < limit; i++){
        if( (i % m1 === 0) || (i % m2 === 0)) sumMult += i;
    }
    return sumMult;
}

module.exports = {
    sumMultiples: sumMultiples
}