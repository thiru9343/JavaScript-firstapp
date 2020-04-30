//Hoisting: with the help of hoisting you can use/call something before you declaring that

a = 10
var b;
add(a,b)
b = 20 
function add(a,b){
    console.log("a>>inside>>",a)
    console.log("b>>inside>>>",b)
    console.log(a+b)
}

var a;
console.log("a>>>>",a)
console.log("b>>>>>",b)
VM65:6 a>>inside>> 10
VM65:7 b>>inside>>> 20
VM65:8 30
VM65:12 a>>>> 10
VM65:13 b>>>>> 20

//////////

var a;
var b;
function add(a,b){
    console.log("a>>inside>>",a)
    console.log("b>>inside>>>",b)
    console.log(a+b)
}

a = 10
b = undefined
b = 10

add(a,b)
VM89:4 a>>inside>> 10
VM89:5 b>>inside>>> 10
VM89:6 20
