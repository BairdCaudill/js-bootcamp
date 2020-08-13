function isPrime(n) {
    if (n === 1) return false

    const sieve = {
        //Code will internally modify this, we leave it empty.
    }

    let current = 2

    while (current <= n) {
        //Current will go from 2 all the way up to n
        //Check if the current is crossed off

        if (sieve[current] === undefined) {

            sieve[current] = true //here we are saying if it is not set as crossed
            //off or circled then we cicle it (it is prime)

            //If the current is not crossed off then it is prime and we need to cross
            //all the multiples smaller than n

            let multiple = current

            while (multiple <= n) {

                multiple = multiple + current

                //here we are crossing off the multiples of current

                sieve[multiple] = false

            }

        }

        current = current + 1
        //this is advancing the current

    }

    return sieve[n]

}



module.exports = { isPrime }

