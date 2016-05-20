export default function getPrimes(max){
    const result = [];

    if(max > 2){
        result.push(2);
    }

    for(let i = 3; i < max; i += 2){
        if(isPrime(i)){
            result.push(i);
        }
    }

    return result;
}

function isPrime(number){
    // only numbers lower or equal to square root can be prime factors of the number
    const m = Math.sqrt(number);

    // skip even numbers
    for(let i = 3; i <= m; i += 2){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}