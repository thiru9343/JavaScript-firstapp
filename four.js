var city="lOnDon";
var city="lOnDon";
undefined
city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"


var city="lOnDon";
"London"
var city="lOnDon";
undefined
city.length
6
var city = "    Amsterdam.  "
undefined
city.length
16
city.trim()
"Amsterdam."
var city = "    Amsterdam  .  "
undefined
city.trim()
"Amsterdam  ."

var city = "Helsinki"
undefined
city.length
8
city[0]
"H"
city[1]
"e"
city[city.length-1]
"i"
var city = "  Helsinki . "
undefined
city.trim().length
10

var city = "Helsinki"
undefined
city.charAt(0)
"H"
city.charAt(6)
"k"
city.slice(1)
"elsinki"
city.slice(2)
"lsinki"
var city = "Helsinki"

undefined
city.slice(3)
"sinki"
city.slice(1,4)
"els"
/* If in slice only digit is provided this will remove how many
In Case 2 value it will pick from given range
*/

var city = "Helsinki"

undefined
city
"Helsinki"
city.slice(1)
"elsinki"
city
"Helsinki"
city.toUpperCase()
"HELSINKI"
city
"Helsinki"
var out = city.toUpperCase()
undefined
out
"HELSINKI"


var city="lOnDon";
city.charAt(0)

var city="lOnDon";
city.charAt(0)
"l"
var city="lOnDon";
city.charAt(0).toUpperCase()
"L"
city.slice(1)
"OnDon"
city.slice(1).toLowerCase()
"ondon"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"London"

var a = "Hi i am doing javascript"

var a = "Hi i am doing javascript"
undefined
a.replace('javascript','JS')
"Hi i am doing JS"

var a = "Hi javascript i am doing javascript"

var a = "Hi javascript i am doing javascript"
undefined
a.replace('javascript','JS')
"Hi JS i am doing javascript"
a.replace(/javascript/g,'JS')
"Hi JS i am doing JS"

var city = "  Helsinki . "
undefined
city.repeat(/ /g,'')
""
city.replace(/ /g,'')
"Helsinki."
var b = a
undefined
b
"Hi javascript i am doing javascript"
b.replace(/ /g,'')
"Hijavascriptiamdoingjavascript"
city.replace(/i/g,'a')
"  Helsanka . "
city.replace(/ i/g,'a')
"  Helsinki . "
city.replace(/i /g,'a')
"  Helsinka. "
city.replace(/ /g,'').replace(/i/g,'a')
"Helsanka."

slice
substring
substr


var a = "javascript"
undefined
a.slice(2)
"vascript"
a.slice(3)
"ascript"
a.slice(2,5)
"vas"
/*
Slice(start,end)
>if first value is -ve than output is null
>if first positive and second -ve and remove from both direction
Substring(start,end)
> -ve value is ignored
Substr(start,length)
> if only one value and that is -ve it start from backward
*/
var a = "javascript"
undefined
a.substring(2)
"vascript"
a.substring(2,5)
"vas"
var a = "javascript"
undefined
a.substr(1)
"avascript"
a.substr(2,5)
"vascr"
var a = "javascript"
undefined
a.slice(2,-2)
"vascri"
a.slice(-2,2)
""
a.substring(2,-2)
"ja"
a.substring(-2,2)
"ja"
a.substring(-2,2)
"ja"
a.substr(1,-3)
""
a.substr(-1,2)
"t"
a.substr(-4)
"ript"
a.substr(-4,-1)