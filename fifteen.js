var a = 10
var b = 20
a+b

//function
//method
//arrow function
//anonyms function IIFE
//generator function

function add(a,b){
    return a+b
}

add(1,2)
3
add('a','a')
"aa"


//method

var isEven = function(userInput){
    var output;
    if(userInput%2==0){
        output="Number is even"
    }else{
        output="Number is odd"
    }

    return output
}

isEven(10)
"Number is even"


//arrow function
var isEven = (userInput) => {
    var output;
    if(userInput%2==0){
        output="Number is even"
    }else{
        output="Number is odd"
    }

    return output
}

isEven(10)
"Number is even"