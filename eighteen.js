var a=[1,3,5,7,9]
undefined
a.map((data) => {return data})
[ 1, 3, 5, 7, 9 ]
a.filter((data) => {return data})
[ 1, 3, 5, 7, 9 ]
a.filter((data) => {return data>5})
[ 7, 9 ]



var a = ["a","b","c"]
a.map((data) => { return data}) 

var b = [10,34,52,20,25,36,24]
b.filter((data) => { return data>24 })
[34, 52, 25, 36]


var b = [10,34,52,20,25,36,24]
undefined
b.map((data) => { return data>24 })
[
  false, true,
  true,  false,
  true,  true,
  false
]





var a = [0,1,2,3]
a.map((data) => { return data*2 })
(4) [0, 2, 4, 6]
a.filter((data) => { return data*2 })
(3) [1, 2, 3]