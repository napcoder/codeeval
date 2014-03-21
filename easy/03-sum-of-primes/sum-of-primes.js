var primeLimit = 1000;
var sumPrimeNumbers = function(limit) {
	var primes = [2];
	var total = 0;
	var findPrimeNumbers = function () {
		var isPrimeNumber = function(num) {
			var gtSqrt = false;
			for (var i = 0; i < primes.length && !gtSqrt; i++) {
				if (num % primes[i] === 0)
					return false;
				gtSqrt = primes[i] > Math.sqrt(num);
			}
			return true;
		};
		var i = 3;
		while(primes.length < limit) {
			if (isPrimeNumber(i))
				primes.push(i);
			i++;
		}
	};

	findPrimeNumbers();
	primes.forEach(function(element) {
		total += element;
	});
	return total;
};

console.log(sumPrimeNumbers(primeLimit));