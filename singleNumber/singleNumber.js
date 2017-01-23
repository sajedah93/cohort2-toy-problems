/*
There are 3 problems today: you can do 2 medium ones or the advanced one.

Problem 1 (medium):
Given an UNSORTED array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. 

Extra credit: Could you implement it without using extra memory?

Example:
arr = [2,4,3,6,8,2,3,4,8];
singleNumber(arr);//should return 6 because it only appear once
*/
function singleNumber(arr){
	var counter = 0 ; 
	var array = arr.sort();
	for (var i = 0; i < array.length; i++) {
		if(array[i] !== array[i+1]){
			return array[i];
		}
			i++;
		}
	}
/*
Problem 2 (medium):
Given an array of integers, return indices of the two numbers such that they add up to
a specific target.

You may assume that each input would have exactly one solution.

Extra: Can you make it run in linear time?

Example:
var nums = [2, 7, 11, 15], target = 9,
twoSum(nums,9); //should return [0,1] because nums[0] + nums[1] = 2 + 7 = 9;
*/

function twoSum(nums, target){
			var arr = [] ;

	for (var i = 0; i < nums.length; i++) {
		var x = nums[i];
		if(x + nums[i+1] === target){
			arr.push(i,i+1)
		}
	}
	return arr ;
}

/*
Problem 3 (advanced):
Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10^n.

Example:
Given n = 2, return 91. (The answer should be the total numbers in the range of 0 ≤ x < 100, 
excluding [11,22,33,44,55,66,77,88,99] because they don't have unique digits)

countAllNumbers(2); //should return 91 because there are 91 numbers that have unique digits
*/

//not completed
function countAllNumbers(n){
	// var unique = [11,22,33,44,55,66,77,88,99];
	var newArr= [];
	var res = Math.pow(10,n);
	for (var i = 10; i < res; i++) {
		newArr.push(sep(i));
	}
	return newArr ;
}

var sep = function(n){
	 var digits = (""+n).split("");
	 return digits ; 
}


