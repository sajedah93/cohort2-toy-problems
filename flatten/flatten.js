/*
For this exercise you will create a flatten function. 
The function takes in any number of arguments and flattens them into a single array. 
If any of the arguments passed in are an array then the individual objects within the array
will be flattened so that they exist at the same level as the other arguments. 
Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']

*/

function flatten(){
	var newArr = [] ;
	var str ;
	for (var i = 0; i < arguments.length; i++) {
		if(Array.isArray(arguments[i])){
			arguments[i]=arguments[i].toString();


			newArr.push(arguments[i][i])
		}else{
			if(arguments[i] === null){
				arguments[i] = 'null'
			}
		}
		newArr.push(arguments[i])

	}
	for (var i = 0; i < newArr.length; i++) {
		if(newArr[i] === ','){
			newArr.splice(i,1)
		}else if(typeof newArr[i] === 'string'){
			if(newArr[i].includes(',')){
			newArr[i]=newArr[i].split(",")
			newArr[i] = newArr[i].toString()
		}
	}
}
	return newArr;


}