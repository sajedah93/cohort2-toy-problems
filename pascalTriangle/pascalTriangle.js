/*
Pascal triangle is a triangle made with rows of numbers.
The first row is [1]. 
The second row is [1,1].
In all following rows, each number is the sum of the two directly above it.

For example, the pascal triangle with 4 rows is:

        1
      1   1
    1   2   1
  1   3   3   1

or in array form: [[1],[1,1],[1,2,1],[1,3,3,1]];

Read more about Pascal Triangle here:
http://en.wikipedia.org/wiki/Pascal's_triangle

Also, see the animated GIF file in this folder (open it in Chrome)

The task for this exercise is to write a function that given the number of rows, builds an array of arrays that represents the pascal triangle.

For example:
buildTriangle(3);// should output [[1],[1,1],[1,2,1]];
*/

function buildTriangle(numOfRows) {

  var result = [[1]];
  var newArr;
  for (var j = 0; j < numOfRows-1; j++) {
    newArr = [1];
    for (var k = 1; k < result[j].length; k++) {
      newArr[k] = result[j][k] + result[j][k-1];
    }
    newArr.push(1);
    result.push(newArr);
  }

  return result;
}



