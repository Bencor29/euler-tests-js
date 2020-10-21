function sumMultiples(limit){
    let sumMult = 0;
    
    for (let i=0; i < limit; i++){
        if( (i % 3 === 0) || (i % 5 === 0)) sumMult += i;
    }
    
    return sumMult;

}
