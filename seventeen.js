var a = 10
var b = 20
///
var = we can declare and reassign
let =  we cannot redeclare but can reassign
const = cannot redeclare and nor reassign


//////
var a;  //declare
var b;
a= 10   //assignement 
b = 20

> var a = 10
undefined
> a
10
> var a = 11
undefined
> a
11
> a = 12
12
> a
12
> 

let b =10
undefined
> b
10
> 
> let b =11
Thrown:
SyntaxError: Identifier 'b' has already been declared
> b=12
12
> b
12

> const c =10
undefined
> const c =11
Thrown:
SyntaxError: Identifier 'c' has already been declared
> c = 11
Thrown:
TypeError: Assignment to constant variable.

