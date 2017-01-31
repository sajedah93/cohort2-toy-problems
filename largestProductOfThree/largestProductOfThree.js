/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 * 
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
	var max = 1; 
	 array=array.sort();
	 // for (var i = 0; i < array.length; i++) {
	 // 	array[i] = Math.abs(array[i])
	 // }
	 
	 var x = array.length-1 ;
	 while(x !== 0){
	 	max*=array[x];
	 	x-- ;
	 }
	return max
}






