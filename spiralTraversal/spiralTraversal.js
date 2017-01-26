/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix){
	var newArr = [] ; 
	
	var x = matrix.shift() ;
	  newArr = newArr.concat(x);
	   for (var j=0; j < matrix.length - 1; j++) {
	   	var y = matrix[j].pop()
            newArr.push(y);
        }
        var w = matrix.pop();
       newArr = newArr.concat(w.reverse());
       // newArr = newArr.concat
       return newArr ; 
     
};



};
>>>>>>> 812640f2ad169de84a70e736efcb0f6864aaf56e
