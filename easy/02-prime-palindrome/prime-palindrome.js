var checkIsPalindrome = function(num) {
	var recursiveCheck = function(word) {
		if (word.length < 2)
			return true;
		else
			return word.lastIndexOf(word.charAt(0)) === (word.length - 1) &&
				recursiveCheck(word.slice(1, -1));
	};

	var sNum = num.toString();
	return recursiveCheck(sNum);
};

/*
var testCheckIsPalindrome = function(num) {
	console.log('is palindrome ' + num + '? ' + checkIsPalindrome(num));
};

testCheckIsPalindrome(8998);
testCheckIsPalindrome(898);
testCheckIsPalindrome(88);
testCheckIsPalindrome(8);
testCheckIsPalindrome(81234);
*/
var checkIsPrime = function(num) {
	for (var i = 2; i <= Math.sqrt(num); i++)
		if (num % i === 0)
			return false;
	return true;
};
/*
var testCheckIsPrime = function() {
	for (var i = 1; i < 20; i++)
		console.log(i + ' è  un numero primo? ' + checkIsPrime(i));
};

testCheckIsPrime();
*/

var found = false;
var limit = 1000;
var number = limit;
while(!found && number > 0) {
	found = checkIsPalindrome(number) && checkIsPrime(number);
	if (found)
		console.log(number);
	else
		number--;
}