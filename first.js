Es5
Es6
Es7
Ecma Script 
(its a base lib)

///////////
String  = "jwehekfh", '443ferg4t', '354', 'true'
Number  = 87687 , 89798787, 434.7656
Boolean = true,false

////Es5/////
var a = "John"
var b = 878
var c = true
var a = "John"
undefined
typeof(a)
"string"
var b = 878
var c = true
undefined
typeof(b)
"number"
typeof(c)
"boolean"
var a = "34555"
undefined
typeof(a)
"string"
var a = "true"
undefined
typeof(a)
"string"

////Es6/////
let 
const

///////////
var = we can redeclare and reassign 
let = we cannot redeclare but can reassign
const = we cannot redeclare nor reassign


var a = 10;
var b = 20;

var a;  //declare
var b;
a=10; //assignment
b=20;

var a = 10
undefined
a
10
var a = 20
undefined
a
20
a = 30
30
a
30

> let a = 10
undefined
> a
10
> let a = 11
Thrown:
SyntaxError: Identifier 'a' has already been declared
> a = 11
11
> a
11
> c


> const b = 11
Thrown:
SyntaxError: Identifier 'b' has already been declared
> b =11
Thrown:
TypeError: Assignment to constant variable.