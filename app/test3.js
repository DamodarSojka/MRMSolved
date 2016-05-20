export default function test3(numMax){
    const result = [];

    // base case for 1
    if(numMax >= 1) {
        result.push(0);
    }

    // base case for 2
    if(numMax >= 2){
        result.push(1);
    }

    for(let i = 2; i < numMax; i++){
        const number = result[i-1] + result[i-2];
        result.push(number);
    }

    return result;
}
