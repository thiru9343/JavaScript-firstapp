Regex-->Regualr Expression


^$ // regex always start with ^ symbol and end with $ symbol

^[0-9]$ // this pattern will take only one digit thats number // this pattern will help to match the number

^[0-9]{10}$ // exactly takes 10 number for ex: phone number

^([a-zA-Z]+)$ // takes only a-z and A-Z strings with lenth does not matter // if you don't know the length so mention + symbol in ope braces

^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$ // email validation // \. is mandatory // 2 is min and 5 is max length


var a = "a@a.com"
a.match(^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$)

var a = "a@a.com"
a.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined] //patterns matches and will get output 

var a = "a.com"
undefined
a.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$")
null // if pattern does not match will get null


var phn = 923895734897
undefined
phn.match("^[0-9]{10}$")
VM243:1 Uncaught TypeError: phn.match is not a function
    at <anonymous>:1:5
(anonymous) @ VM243:1
var phn = "923895734897"
undefined

phn.match("^[0-9]{10}$")
null

var phn = "9238957348"
undefined
phn.match("^[0-9]{10}$")
["9238957348", index: 0, input: "9238957348", groups: undefined]