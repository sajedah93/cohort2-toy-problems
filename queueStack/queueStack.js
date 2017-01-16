/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
  this.stack=[];
}

   // add an item to the top of the stack
   Stack.prototype.push = function(value){
    this.stack.push(value);
   };

   // remove an item from the top of the stack
   Stack.prototype.pop = function(){
    this.stack.pop();
   };

   // return the number of items in the stack
  Stack.prototype.size = function(){
    return this.stack.length ; 
   };
 


 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
    this.inbox = new Stack();
    this.outbox = new Stack();
 }

   // called to add an item to the `queue`
   Queue.prototype.enqueue = function(value){
       this.inbox.push(value);
   
     }
  

   // called to remove an item from the `queue`
  Queue.prototype.dequeue = function(){

      this.outbox.push(this.inbox.pop())

    }
   

   // should return the number of items in the queue
   Queue.prototype.size = function(){
    return this.inbox.length + this.outbox.length ;
   };
 
 