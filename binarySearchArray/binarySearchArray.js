/*
 * Given a SORTED array, find the index of an element
 * using a binary search algorithm.
 *
 * Note that you can't just use indexOf. Your function must run in O(log(n)) time.
 *
 * Example usage:
 *
 * 
 * console.log(index); // 4
 */

// var binarySearch = function (array, target) {
// 	// var x = 0 ; 
// 	// var llength = array.length-1 ;
// 	for (var i = 0; i < array.length; i++) {
// 		if(array[i] === target){
// 			return i
// 		}
// 	}

  
// };



var binarySearch = function (array, target) {
	var first = 0 ; 
	var last = array.length-1 ; 
	var mid = Math.floor((last+first)/2)
	while( first < last){
		if(array[mid] !== target){
			if (target < array[mid]){
				last = mid - 1;
			} else if (target > array[mid]){
				first = mid + 1;
			}
			mid = Math.floor((last + first)/2);
        // console.log(mid)
    }
    else{
    	return mid;
    }
}
}




