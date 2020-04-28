var a = 10
if(a){
    console.log("do something")
}else{
    console.log("do Nothing")
}
VM1290:3 do something


var a = 0
if(a){
    console.log("do something")
}else{
    console.log("do Nothing")
}
VM1296:5 do Nothing

var a = 12
if(a%2==0){
    console.log("Number is even")
}else if(a%3==0){
    console.log("Number is divisible by 3")
}
else{
    console.log("Number is odd")
}

var a = 12
if(a%2==0){
    console.log("Number is even")
}
if(a%3==0){
    console.log("Number is divisible by 3")
}
else{
    console.log("Number is odd")
}
Number is even
Number is divisible by 3

var a = 15
if(a%2==0){
    console.log("Number is even")
}
else if(a%3==0 || a%5==0){
    console.log("Number is divisible by 3 and 5")
    if(a%3==0){
        console.log("It is 3")
    }else{
        console.log("It is 5")
    }
}
else{
    console.log("Number is odd")
}

///////////
var a = 10
undefined
a>10?"hii":"biie"
"biie"
a==10?"hii":"biie"
"hii"
a==10?a+1:a-1
11
a>10?a+1:a-1
9


/////
Create luck game = 
> Generate one number between 1 to 20
> Take input as number form user
> if both match than win else loose