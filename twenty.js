var myvar = []

for(var i=0;i<3;i++){
    myvar[i]=function(){
        console.log("I m in function ",i)
    }
}

for(j=0;j<3;j++){
    myvar[j]()
}

$ node twenty.js
I m in function  3
I m in function  3
I m in function  3

// output is everytime 3 because, var cannot restrict the scope
// var defined globally so it cannot override the value
-------------------------
var myvar = []

for(let i=0;i<3;i++){
    myvar[i]=function(){
        console.log("I m in function ",i)
    }
}

for(j=0;j<3;j++){
    myvar[j]()
}

$ node twenty.js
I m in function  0
I m in function  1
I m in function  2
//let handling the scope
-------------------------
var myvar = []

for(let i=0;i<3;i++){
    myvar[i]=function(){
        console.log("I m in function ",i)
    }
}

for(j=0;j<3;j++){
    i=j
    myvar[j]()
}

$ node twenty.js
I m in function  0
I m in function  1
I m in function  2