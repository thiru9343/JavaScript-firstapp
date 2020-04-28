if 
else
else if


var a = 10;
if(a%2==0){
    console.log("Number is Even")
}else{
    console.log("Number is odd")
}
"Number is even"


var a = 10;
if(a%2==0){
    console.log("Number is Even")
}else if(a%3==0){
    console.log("Number is divisble by 3")
}
else{
    console.log("Number is odd")
}

var a = 25;
if(a%2==0){
    console.log("Number is Even")
}else if(a%3==0 || a%5==0){
   if(a%3==0){
    console.log("Its 3")
   }else{
    console.log("Its 5")
   }
}
else{
    console.log("Number is odd")
}
Its 5

var a = 12;
if(a%2==0){
    console.log("Number is Even")
}if(a%3==0){
    console.log("Number is divisble by 3")
}
else{
    console.log("Number is odd")
}

Number is Even
Number is divisble by 3

//Ternery 

condition ? if condition true : if condition false

var a = 20
a>20?"hii":"bie"

var a = 20
a>20?"hii":"bie"
"bie"
var a = 20
a==20?"hii":"bie"
"hii"
var a = 20
a==20?a+1:a-1
21
var a = 20
a>20?a+1:a-1
19


var name = "JoHn"
var validate="John"

undefined
name == validate
false

var name = "JoHn"
var validate="John"
name.toLowerCase()==validate.toLowerCase()?"Welcome":"I dont know you"
"Welcome"


/*
Luck Game
Generate One number between 1 to 20
Take one input from user
If both match than user win else loose
*/