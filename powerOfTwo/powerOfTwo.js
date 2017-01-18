/*
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
Calculate the sum of the digits of the number 2^1000?
Hint the answer is 1366.
*/

var powerOfTwo = function(num){
	var result = Math.pow(2,num).toString();
	var arrayOfnums = result.split("").map(function(item) {

    return parseInt(item, 10);
		});
	var total = 0;
	for (var i = 0; i < arrayOfnums.length; i++) {
		var x = arrayOfnums[i] || 0
		total +=x;
	}
	
	return total ;

}