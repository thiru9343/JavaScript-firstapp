function sayHi(){
    return "Hi to JS"
}

console.log(sayHi())/* invoke/call the function to return the output*/
//IIFE
----------------------------------
/*first ((){}()) 
then
(function(){

}()) 
This function called self invoking function(it will be executed when file loads)*/
(function(){
    console.log("Hi to JS")
}())

-------------------------

///Generator function 
function looping(userInput){
  for(i=0;i<userInput;i++){
      console.log(i)
  }
}

looping(4)
VM368:3 0
VM368:3 1
VM368:3 2
VM368:3 3
/* There is no cotrol of data means when user wants then only show the data */
--------------------------
/*solution is put *(star) and yield */
function * looping(userInput){
    for(i=0;i<userInput;i++){
        yield i
    }
  }
undefined
looping(2)
looping {<suspended>}
    </suspended>
    /* so assign to one var then do data.next() to print the data when user wants only*/
var data = looping(3)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: undefined, done: true}