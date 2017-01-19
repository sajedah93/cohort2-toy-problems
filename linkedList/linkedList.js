/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
	
	this.head = null ;
	this.tail = null ;
	this.counter = 0 ;

};

LinkedList.prototype.makeNode=function(data){ 
 return {data:data,
 		next:null};
};


LinkedList.prototype.addToTail= function(data){
	if(this.head === null){
		this.head = this.makeNode(data);
		this.tail = this.start ; 
	}else{
		this.tail.next = this.makeNode(data)
		this.tail = this.tail.next;
	}

};

LinkedList.prototype.removeHead= function(){
	  if(this.tail !== null){ 
     var current = this.head.value; 
    this.head = this.head.next;

    return current  ;}

};

LinkedList.prototype.contains= function(target){
    while(this.head !== null){
      if(this.head.data === target){
       return true;
      }
      this.head = this.head.next;
    }
    return false; 
  };

 




