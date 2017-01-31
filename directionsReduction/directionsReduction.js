/*
You are lost in Amman and need directions. You talk to a few strangers
and get these directions: go "NORTH", then "SOUTH", then "WEST", then "EAST", then "EAST".

Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. 
Going to one direction and coming back the opposite direction is a needless effort.

Your task is to look at the directions and eliminate all unnecessary moves.
In this case, you will just go EAST.

Another example:

plan = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, 
better stay where you are. So the task is to find a simplified version of the plan. 

A better plan in this case is simply: 
plan = ["WEST"]

You have to write a function dirReduc which will take an array of strings 
and returns an array of strings with the needless directions removed.

More examples:

dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => [] //don't need to move at all
*/

	var dirReduc = function(directions){
		var check = function(directions){ 
			var current ;
			while(directions.length >0){
		for (var i = 0; i < directions.length; i++) {
			
			if(directions[i] === 'NORTH'){
				current = directions[i+1];
				if(directions[i+1] === 'NORTH' || directions[i+1] === 'SOUTH'){
					directions= directions.slice(2);
					i-=2; ;
				}
			}else if(directions[i] === 'SOUTH'){
			
				if(directions[i+1] === 'SOUTH' || directions[i+1] === 'NORTH' || current === 'NORTH' || current === 'SOUTH'){
					current=directions[i+1];
					directions =directions.slice(2);
					i-=2 ; ;
				}
			}else if(directions[i] === 'EAST'){
				if(directions[i+1] === 'EAST' || directions[i+1] === 'WEST' || current === 'WEST' || current === 'EAST'){
					current=directions[i+1];
					directions = directions.slice(2);
					i-=2;;
				}
			}else if(directions[i] === 'WEST'){
				if(directions[i+1] === 'WEST' || directions[i+1] === 'EAST' || current === 'WEST' || current === 'EAST'){
					current=directions[i+1];
					 directions = directions.slice(2);
					i-=2 ;
				}
			}
		}
		return directions

	}
	}
			return check(directions);

}


	

